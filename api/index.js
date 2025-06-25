export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml'); // ✅ REQUIRED by Twilio
  res.status(200).send(`
    <Response>
      <Redirect method="POST">https://pathn8n.app.n8n.cloud/webhook/start-call</Redirect>
    </Response>
  `);
}

