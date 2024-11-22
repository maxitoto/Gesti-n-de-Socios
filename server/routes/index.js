const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    res.json({ message: 'Hola desde el servidor!!' });
});

module.exports = router;
