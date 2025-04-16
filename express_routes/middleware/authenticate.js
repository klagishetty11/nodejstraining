module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Simulate token verification
    if (token !== 'valid-token') {
        return res.status(403).json({ message: 'Invalid token' });
    }

    // If the token is valid, proceed to the next middleware
    next();
}