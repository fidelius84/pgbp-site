export const onRequestPost: PagesFunction = async ({ request, env }) => {
  const data = await request.json();
  if (!data?.email || !data?.message) return new Response("Bad Request", { status: 400 });
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "PGBP Website <no-reply@pgbp.io>",
      to: ["info@pgbp.io"],
      subject: `Contact form (${data.locale || 'en'})`,
      text: `From: ${data.name || 'N/A'} <${data.email}>\n\n${data.message}`,
    }),
  });
  return new Response("OK");
}