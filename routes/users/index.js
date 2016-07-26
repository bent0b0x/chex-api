var router = require('express').Router();

module.exports = () => {

    router.use('/:user_id', require('./{user_id}')());

    router.get('/', (req, res) => {
        res.send('Retrieving all users');
    });

    return router;
};
