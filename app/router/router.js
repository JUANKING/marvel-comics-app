'use strict';
const express = require('express');
const auth =  require('../auth/auth'); 
const comicController = require('../controller/comicController');

const apiRoutes = express.Router(); 
apiRoutes.post('/authenticate', auth.authenticateFake); 
apiRoutes.use(auth.authCheckMiddleware);
apiRoutes.get('/comics', comicController.findAllComics);
apiRoutes.get('/comics/:id', comicController.findComicById);
apiRoutes.get('/', (req, res) =>
  res.json({ message: 'Marvel Api!' })
);

module.exports = apiRoutes;