const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const products = [
  { id: 101, name: 'Basketball', category: 'ball', price: 29 },
  { id: 102, name: 'Running Shoes', category: 'apparel', price: 85 },
  { id: 103, name: 'Yoga Mat', category: 'fitness', price: 20 }
];

app.get('/v1/products', (req, res) => {
  const { category, sort, limit } = req.query;
  let result = [...products];

  if (category) {
    result = result.filter(p => p.category === category);
  }

  if (sort === 'price_asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === 'price_desc') {
    result.sort((a, b) => b.price - a.price);
  }

  if (limit) {
    result = result.slice(0, parseInt(limit));
  }

  res.status(200).json(result);
});

app.get('/v1/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

app.post('/v1/orders', (req, res) => {
  const newOrder = req.body;

  if (!newOrder.userId || !newOrder.items) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  res.status(201).json({
    message: "Order created",
    data: newOrder
  });
});

app.delete('/v1/orders/:id', (req, res) => {
  res.status(204).send();
});

app.get('/v1/users/:userId/orders', (req, res) => {
  res.status(200).json({
    userId: req.params.userId,
    orders: []
  });
});

app.get('/v1/products/:productId/reviews', (req, res) => {
  res.status(200).json({
    productId: req.params.productId,
    reviews: ["Great quality!", "Worth the price"]
  });
});

app.listen(PORT, () => {
  console.log(`Sports Store API running at http://localhost:${PORT}/v1/`);
});