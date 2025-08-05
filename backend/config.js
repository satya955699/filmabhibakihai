module.exports = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:4000',
  
  // Database configuration (for future use)
  database: {
    url: process.env.DATABASE_URL || null,
  },
  
  // JWT configuration (for future authentication)
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
    expiresIn: '24h',
  },
}; 