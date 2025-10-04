require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');

const app = express();

// Basic security & parsing
app.use(express.json());

// CORS configuration
const clientOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((s) => s.trim());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser like curl/postman
      if (clientOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('CORS not allowed'), false);
    },
    credentials: false,
  })
);

// Health route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'carbon-platform-backend' });
});

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
