// Load environment variables silently
const originalLog = console.log;
const originalError = console.error;
console.log = () => { };
console.error = () => { };
require('dotenv').config();
console.log = originalLog;
console.error = originalError;

const app = require('./src/app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`\n✅ Server running on port ${PORT}`);
    console.log(`🔗 API available at http://localhost:${PORT}/api/health\n`);
});

// Keep server running and handle errors
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use`);
        process.exit(1);
    } else {
        console.error('❌ Server error:', error);
    }
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n⏹️  Server shutting down gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});
