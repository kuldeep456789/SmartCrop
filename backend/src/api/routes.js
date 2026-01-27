const express = require('express');
const router = express.Router();
const { getCropRecommendation } = require('../services/aiService');

router.post('/recommend', async (req, res) => {
    try {
        console.log("Received recommendation request:", req.body);
        const data = req.body;
        // Simulate processing delay for AI "thinking"
        setTimeout(async () => {
            const result = await getCropRecommendation(data);
            res.json(result);
        }, 1500);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/health', (req, res) => res.json({ status: 'ok', service: 'CropAI-Backend', version: '1.0.0' }));

module.exports = router;
