const express = require('express');

const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const Login = require('./Routes/Login')
const Auth = require('./Routes/Auth')


app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, 'Views'));



app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
  res.render('Index',{ currentRoute: '/'});
});

app.use('/Login',Login);
app.use('/Auth',Auth);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});