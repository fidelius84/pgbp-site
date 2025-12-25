export const onRequestPost: PagesFunction = async ({ request, env }) => {
  const data = await request.json();
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "PGBP Website <no-reply@pgbp.io>",
      to: ["info@pgbp.io"],
      subject: `Redemption request: ${data.amount || 'N/A'} PGBP`,
      text: JSON.stringify(data, null, 2),
    }),
  });
  return new Response("OK");
}