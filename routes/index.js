var router = require('express').Router(),
    users = require('./users');

module.exports = () => {
  router.use('/users', users());

  return router;
};