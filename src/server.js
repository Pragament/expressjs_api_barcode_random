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
  // Randomly throw 404 for testing
    const throw404 = Math.random() < 0.5;
    if (throw404) {
      return res.status(404).json({ error: `Barcode ${barcode} not found` });
    }

  const randomProduct = products[Math.floor(Math.random() * products.length)];
  const response = `${randomProduct} (${barcode})`;

  res.json({ product: response });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
