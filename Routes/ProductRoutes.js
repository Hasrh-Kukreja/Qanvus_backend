const express = require('express');
const router = express.Router();
const upload = require('../Multerconfig'); 
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require('../Controllers/ProductController'); // Import your product controller

// Create a new product with image upload
router.post('/products', upload.single('productThumbnail'), createProduct);

// Retrieve all products
router.get('/products', getAllProducts);

// Retrieve a product by ID
router.get('/products/:productId', getProductById);

// Update a product by ID
router.put('/products/:productId', updateProductById);

// Delete a product by ID
router.delete('/products/:productId', deleteProductById);

module.exports = router;
