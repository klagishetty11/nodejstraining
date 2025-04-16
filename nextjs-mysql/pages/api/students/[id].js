// GET PUT DELETE student by id
import { connect } from '../../../lib/db';
export default async function handler(req, res) {
    const connection = await connect();
    const { id } = req.query;
    if (req.method === 'GET') {
        const [rows] = await connection.query('SELECT * FROM students WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(rows[0]);
    } else if (req.method === 'PUT') {
        const { name, email, course } = req.body;
        const [result] = await connection.query('UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?', [name, email, course, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ id, name, email, course });
    } else if (req.method === 'DELETE') {
        const [result] = await connection.query('DELETE FROM students WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(204).end();
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    connection.end();
}