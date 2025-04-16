module.exports = (req, res, next) => {
    const now = new Date();
    const logMessage = `${now.toISOString()} - ${req.method} ${req.url}`;
    console.log(logMessage);
    next();
    }