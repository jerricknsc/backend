// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock user data for authentication
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Authentication endpoint
app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    res.json({ success: true, message: 'Authentication successful' });
  } else {
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});