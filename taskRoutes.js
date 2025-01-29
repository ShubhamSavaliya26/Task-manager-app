const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Create task
router.post('/', async (req, res) => {
    const { name, deadline } = req.body;
    const task = new Task({ name, deadline, status: 'pending' });
    try {
        await task.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error saving task');
    }
});

// Mark task as complete or pending
router.post('/:id/complete', async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.status = task.status === 'complete' ? 'pending' : 'complete';
    try {
        await task.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error updating task');
    }
});

// Delete task
router.post('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error deleting task');
    }
});

module.exports = router;
