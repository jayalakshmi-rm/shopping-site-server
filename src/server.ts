import express = require("express");
import bodyParser = require("body-parser");
import cors = require("cors");
import { productApp } from './product/product';
import { userApp } from './user/users';
import * as mongoose from 'mongoose';

const router = express();
const { PORT = 3000 } = process.env;



// Our Express APP config
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.set("port", process.env.PORT || 3000);
app.use('/product', productApp);
app.use('/user', userApp);
app.listen(app.get('port'), ()=> {
    console.log('server listening to ', app.get('port'));
})

let url = 'mongodb://localhost:27017/shoppingSiteDB';
mongoose.connect(url, (err: any) => {
  if (err) {
    console.log(err.message);
    console.log(err);
  }
  else {
    console.log('Connected to MongoDb');
  }
});
 