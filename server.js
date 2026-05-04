const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Generate icons dynamically
app.get('/icon-192.png', (req, res) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
    <rect width="192" height="192" rx="32" fill="#0f766e"/>
    <text x="96" y="125" text-anchor="middle" font-size="80" font-weight="900" font-family="Arial" fill="white">ZS</text>
  </svg>`;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

app.get('/icon-512.png', (req, res) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <rect width="512" height="512" rx="80" fill="#0f766e"/>
    <text x="256" y="330" text-anchor="middle" font-size="220" font-weight="900" font-family="Arial" fill="white">ZS</text>
  </svg>`;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Zegseg Scout running on port ${PORT}`);
});
