const express = require('express');
const Router = express.Router();
const bodyParser = require ('body-parser')
const UserModel = require('../Models/UserModel')
const {IsPasswordValid} = require('../Controllers/AuthController');
const { Mongoose } = require('mongoose');


Router.use(bodyParser.urlencoded({ extended: false }));

Router.get('/', (req, res) => {
    res.render('Login',{ currentRoute: '/Login'});
  });
  
Router.post('/', async(req, res) => {
    const { username, password } = req.body;
    try {
      const user = await UserModel.findOne({email : username});
      if (user) {
        if (await IsPasswordValid(password,user.password)){
          return res.send('Login Successful')
        }
      else{
        return res.send('Invalid Password')
      }
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

  module.exports = Router;