// Cloudflare Pages Function — Redemption interest registration
// Receives a POST with { entityName, jurisdiction, email, useCase, estimatedVolume } and emails compliance@pgbp.io.
// Env var required: RESEND_API_KEY

export const onRequestPost: PagesFunction<{ RESEND_API_KEY: string }> = async ({ request, env }) => {
  try {
    const data: any = await request.json();
    if (!data?.email || !data?.entityName) {
      return new Response(JSON.stringify({ ok: false, error: "Missing entityName or email" }), {
        status: 400, headers: { "Content-Type": "application/json" }
      });
    }
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "PGBP Website <no-reply@pgbp.io>",
        to: ["compliance@pgbp.io"],
        reply_to: data.email,
        subject: `Redemption interest — ${data.entityName}`,
        text: `Entity name: ${data.entityName}\nJurisdiction: ${data.jurisdiction || "(not provided)"}\nContact email: ${data.email}\nEstimated monthly volume: ${data.estimatedVolume || "(not provided)"}\n\nUse case:\n${data.useCase || "(none)"}`,
      }),
    });
    if (!r.ok) return new Response(JSON.stringify({ ok: false }), { status: 500, headers: { "Content-Type": "application/json" }});
    return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" }});
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 500, headers: { "Content-Type": "application/json" }});
  }
};
