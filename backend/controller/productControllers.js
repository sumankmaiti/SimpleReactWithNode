const Product = require('../models/Product')

const getProducts = async (req, res) => {
	try {
		const products = await Product.find({})
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
		res.json(products)
	} catch (error) {
		console.error(error);
		res.status(500).json({message: "Server Error"})
	}
}

const getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
		res.json(product)
	} catch(error) {
		console.error(error);
		res.status(500).json({message: 'Server Error'})
	}
}

module.exports = {getProducts, getProductById}