const express = require('express');
const Notice = require('../models/notisSchema');

const NoticesRoute = (app) => {
    app.post('/api/createNotices', async (req, res) => {
        try {
            const createNotices = req.body;

            // Validate if createNotices is present in the request body
            if (!createNotices) {
                return res.status(400).json({ error: 'Missing createNotices in the request body' });
            }

            const newNotices = new Notice(createNotices);
            await newNotices.save();

            res.status(201).json({ message: 'Notices Created Successfully', notice: newNotices });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'An error occurred while creating the notice' });
        }
    });

    app.get('/api/createNotices', async (req, res) => {
        try {
            const notices = await Notice.find()
            res.status(200).json(notices)
        } catch (error) {
            res.status(501).json({ message: "Notices Not Found" })
        }

    })
};

module.exports = NoticesRoute;
