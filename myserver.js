const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

const API_KEY = 'AIzaSyDWgeLNRzEUx1uoLUFonr1CzRUNpRWG_Q4';

app.post('/gemini', async (req, res) => {
  const userMessage = req.body.message;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: userMessage }] }]
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response.";
    res.json({ reply: text });
  } catch (error) {
    res.json({ reply: "Sorry, there was an error connecting to Gemini." });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));