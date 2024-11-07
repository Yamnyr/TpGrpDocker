
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/message', (req, res) => {
    res.json({ message: 'Hello from the backend API!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
