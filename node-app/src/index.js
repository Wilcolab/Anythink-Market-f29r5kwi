// This file serves as the entry point for the application. It imports the app from app.js and starts the server.

const app = require('./app');

const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});