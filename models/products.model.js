const mongoose = require('mongoose');

// the product schema for the model
const ProductSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter a product name'],
		},

		quantity: {
			type: Number,
			required: [true, 'Please enter the quantity'],
			default: 0,
		},

		price: {
			type: Number,
			required: [true],
			default: 0,
		},

		image: {
			type: String,
			required: false,
		},
	},

	{
		timestamps: true, // adds createdAt and updatedAt fields
	}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product; // exporting the Product model for use in other files.
