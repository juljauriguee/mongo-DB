const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method} | URL: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to Route Handling!');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1>');
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Viewing Product ID: ${id}`);
});

app.get('/search', (req, res) => {
  const term = req.query.q;
  res.send(`Searching for: ${term}`);
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});