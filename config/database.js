module.exports = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    poolSize: 100,
    connectionTimeout: 1000,
    ssl: true,
    retryAttempts: 5
};