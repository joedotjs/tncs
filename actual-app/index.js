const express = require('express');

module.exports = app => {

    const router = express.Router();

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/views/index.html');
    });

    router.get('/BACKEND_TREE.js', (req, res) => {
        res.sendFile(__dirname + '/assets/app.js');
    });

    router.get('/BACKEND_TREE.css', (req, res) => {
        res.sendFile(__dirname + '/assets/style.css');
    });

    router.get('/routes', (req, res) => {
        const actualRoutes = app._router.stack.filter(
          middleware => !!middleware.route
        );
        res.send(actualRoutes.map(middleware => middleware.route.path));
    });

    app.use('/backend-tree', router);



};