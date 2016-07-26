var router = require('express').Router({ mergeParams: true });

module.exports = () => {

    router.get('/', (req, res) => {
        res.send(`Retrieving user with id ${req.params.user_id}`);
    });

    return router;
};
