const express = require('express'); // use express library
const mongoose = require('mongoose'); // connect to MongoDb
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

const app = express();

// sample get request
app.get('/', (req, res) => {
	res.send(`Hello, World! this is Mark`);
});

// Connect to MongoDB & listen on port 3000
mongoose
	.connect(connectionString)
	.then(() => {
		console.log('Connected to the Database');
		app.listen(3000, () => {
			console.log('Server is running on port 3000');
		});
	})
	.catch(() => {
		console.log('Could not connect to the database');
	});
