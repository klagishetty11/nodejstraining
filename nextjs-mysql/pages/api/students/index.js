// get all students and post new student
import { connect } from '../../../lib/db';
export default async function handler(req, res) {
    const connection = await connect();
    if (req.method === 'GET') {
        const [rows] = await connection.query('SELECT * FROM students');
        res.status(200).json(rows);
    } else if (req.method === 'POST') {
        const { name, email, course } = req.body;
        const [result] = await connection.query('INSERT INTO students (name, email, course) VALUES (?, ?, ?)', [name, email, course]);
        res.status(201).json({ id: result.insertId, name, email, course });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    connection.end();
}