module.exports = (req, res, next) => {
    res.header('Content-Range', 'finance 0-20/20')
    next()
}