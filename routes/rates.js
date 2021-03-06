const express = require('express');
const router = express.Router();

let lastRates = 4;

router.post('/', (req, res, next) => {
  const { rates } = req.body;
  lastRates = rates;
  res.json({ success: true });
});

router.get('/', (req, res) => res.json({ rates: lastRates }));

module.exports = router;
