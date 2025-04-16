const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all students
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM students');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET single student
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Student not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST new student
router.post('/', async (req, res) => {
    const { name, email, course } = req.body;
    try {
        const [result] = await db.query('INSERT INTO students (name, email, course) VALUES (?, ?, ?)', [name, email, course]);
        res.status(201).json({ id: result.insertId, name, email, course });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT update student
router.put('/:id', async (req, res) => {
    const { name, email, course } = req.body;
    try {
        const [result] = await db.query('UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?', [name, email, course, req.params.id]);
        res.json({ message: 'Student updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE student
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM students WHERE id = ?', [req.params.id]);
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;