const express = require('express');
const Router = express.Router();
const bodyParser = require ('body-parser')
const {AuthenticationRequiredData, IsValidUser } = require('../Controllers/AuthController')


Router.use(bodyParser.urlencoded({ extended: false }));

Router.get('/', (req, res) => {
    res.render('Login',{ currentRoute: '/Login'});
  });
  
Router.post('/',(req, res) => {
    const { username, password } = req.body;
    if (IsValidUser(new AuthenticationRequiredData(username,password))){
      return res.send('Login Successful')
    }
    else{
      return res.send('Invalid Username or Password')
    }
  });

  module.exports = Router;