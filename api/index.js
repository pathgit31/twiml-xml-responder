export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Hello! Your call has been received.</Say>
</Response>`);
}
