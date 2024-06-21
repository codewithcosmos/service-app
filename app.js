const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI environment variable');
  process.exit(1);
}

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
const quoteRoutes = require('./routes/quotes');

app.use('/api/auth', authRoutes);
app.use('/api/quotes', quoteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
