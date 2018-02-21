'use strict';
const jwt    = require('jsonwebtoken'); 
const app = require('../../server');

function authenticateFake(req, res){
    const payload = {
        admin: true 
    };
    const token = jwt.sign(payload, app.get('superSecret'), {
        expiresIn: 1440 
    });

    res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
    });
}

function authCheckMiddleware (req, res, next){
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token no comics.' 
        });    
    }
}

module.exports={authenticateFake, authCheckMiddleware}