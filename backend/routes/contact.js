const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Simple validation
        if (!name || !email || !message) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        const newContact = new Contact({ name, email, message });
        const savedContact = await newContact.save();

        res.status(201).json({ msg: 'Message sent successfully!', contact: savedContact });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
