const express = require('express');
const Router = express.Router();
const bodyParser = require ('body-parser')
const {GetPasswordHash} = require('../Controllers/AuthController')
const User = require('../Models/UserModel');

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: false }));

Router.get('/', (req, res) => {
    res.render('SignUp',{ currentRoute: '/SignUp'});
  });

Router.post('/', async (req, res) => {
    const { firstName, secondName, email, password, gender } = req.body;
    
    const passwordHash = await GetPasswordHash(password);
    console.log('passwordHash = ',passwordHash)
    if (!passwordHash){
      res.status(500).send('Something Went Wrong');
      return;
    }

    console.log(passwordHash)
  
    try {
      let user = new User({
        firstName,
        secondName,
        email,
        password : passwordHash,
        gender,
      });

      console.log(req.body);
  
      await user.save();
      res.send('User registered successfully');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  

module.exports = Router;