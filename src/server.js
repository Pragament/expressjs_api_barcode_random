const express = require('express');
const app = express();
const port = 3000;

// Sample product names
const products = [
  "Shampoo",
  "Toothpaste",
  "Chocolate Bar",
  "Notebook",
  "Mobile Charger",
  "Pen",
  "T-shirt",
  "Headphones"
];

// GET endpoint to return random product with barcode
app.get('/product/:barcode', (req, res) => {
  const { barcode } = req.params;

  if (!barcode) {
    return res.status(400).json({ error: "Barcode is required" });
  }

  const randomProduct = products[Math.floor(Math.random() * products.length)];
  const response = `${randomProduct} (${barcode})`;

  res.json({ product: response });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
