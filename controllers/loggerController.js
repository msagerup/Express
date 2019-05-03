const moment = require('moment');

exports.logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}, ${moment().format()}`)
    next();
}

exports.loggerGreeting = (req,res, next) => {
    res.send('Hellllo');
    next();
}