const express = require('express');
const cors = require('cors'); // Importer le package CORS
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:8080' }));

app.get('/message', (req, res) => {
    res.json({ message: 'Hello from the backend API!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
