export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(`
    <Response>
      <Redirect method="POST">https://pathn8n.app.n8n.cloud/webhook/start-call</Redirect>
    </Response>
  `);
}
