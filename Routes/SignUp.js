const express = require('express');
const Router = express.Router();


Router.get('/', (req, res) => {
    res.render('SignUp',{ currentRoute: '/SignUp'});
  });

module.exports = Router;