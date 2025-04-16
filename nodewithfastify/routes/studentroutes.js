async function studentroutes(fastify, options) {
    const db = fastify.mysql;

    // Get all students
  fastify.get('/api/students', async (req, reply) => {
    const [rows] = await db.query('SELECT * FROM students');
    reply.send(rows);
  });

  // Get a Single student by ID
  fastify.get('/api/students/:id', async (req, reply) => {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
    if (rows.length === 0) {
      return reply.status(404).send({ error: 'Student not found' });
    }
    reply.send(rows[0]);
  });

    // Create a new student 
    fastify.post('/api/students', async (req, reply) => {
        const { name, email, course } = req.body;
        const [result] = await db.query('INSERT INTO students (name, email, course) VALUES (?, ?, ?)', [name, email, course]);
        reply.code(201).send({ id: result.insertId, name, email, course });
    });

    // Update a student by ID
    fastify.put('/api/students/:id', async (req, reply) => {
        const id = req.params.id;
        const { name, email, course } = req.body;
        const [result] = await db.query('UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?', [name, email, course, id]);
        if (result.affectedRows === 0) {
            return reply.status(404).send({ error: 'Student not found' });
        }
        reply.send({ id, name, email, course });
    });

    // Delete a student by ID
    fastify.delete('/api/students/:id', async (req, reply) => {
        const id = req.params.id;
        const [result] = await db.query('DELETE FROM students WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return reply.status(404).send({ error: 'Student not found' });
        }
        reply.send({ message: 'Student deleted successfully' });
    });


}

module.exports = studentroutes;
// This code defines a set of routes for managing students in a Fastify application.    
