const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const Login = require('./Routes/Login')
const SignUp = require('./Routes/SignUp')


mongoose
  .connect('mongodb://localhost:27017/EcommerceSite')
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, 'Views'));



app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
  res.render('Index',{ currentRoute: '/'});
});

app.use('/Login',Login);
app.use('/Signup',SignUp);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});