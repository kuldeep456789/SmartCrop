const { Pool } = require('pg');
require('dotenv').config();

// Using a mock pool if DATABASE_URL is standard placeholder to avoid crash on start
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
