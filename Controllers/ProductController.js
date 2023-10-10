const Product = require('../Models/Product');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    console.log("Req body", req.body)
    let productThumbnail = image;
    const product = new Product({ name, price, productThumbnail});
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Could not create the product' });
  }
};

// Retrieve all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch products' });
  }
};

// Retrieve a single product by ID
const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch product' });
  }
};

// Update a product by ID
const updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, productThumbnail } = req.body;
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, price, productThumbnail },
      { new: true } // Return the updated product
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Could not update product' });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete product' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
