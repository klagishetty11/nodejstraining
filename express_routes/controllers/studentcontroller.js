let students = [{ id: 1, name: 'John Doe', age: 20 }, { id: 2, name: 'Jane Smith', age: 22 }];
exports.getStudents = (req, res) => {
    res.status(200).json(students);
}

exports.getStudentById = (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const student = students.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
}

exports.createStudent = (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ message: 'Name and age are required' });
    }
    const newStudent = { id: students.length + 1, name, age };
    students.push(newStudent);
    res.status(201).json(newStudent);
}

exports.updateStudent = (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex === -1) {
        return res.status(404).json({ message: 'Student not found' });
    }
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ message: 'Name and age are required' });
    }
    students[studentIndex] = { id: studentId, name, age };
    res.status(200).json(students[studentIndex]);
}

exports.deleteStudent = (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex === -1) {
        return res.status(404).json({ message: 'Student not found' });
    }
    students.splice(studentIndex, 1);
    res.status(204).send();
}