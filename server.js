let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
require('dotenv').config()
// Express Route
const studentRoute = require('./routes/student.route')
const path = require('path')

// Connecting mongoDB Database
mongoose
  .connect(process.env.MONGODB_URI||'mongodb+srv://test:test@cluster0.nfmkma3.mongodb.net/?retryWrites=true&w=majority')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)
app.use(express.static(path.join(__dirname, './build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build'))
})
// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});