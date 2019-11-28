import express = require('express');
import {UserSchemaModel, IUserModel} from '../schema/user.schema';

export const userApp = express();

// api to register new user
userApp.post('/register', (req, res, next) => {
  let userInfo: IUserModel = req.body;
  let createUser = new UserSchemaModel();
  createUser.username = userInfo.username;
  createUser.password = userInfo.password;
  createUser.emailId = userInfo.emailId;
  createUser.phoneNumber = userInfo.phoneNumber;
  createUser.country = userInfo.country;
  createUser.addressLine1 = userInfo.addressLine1;
  createUser.addressLine2 = userInfo.addressLine2;
  createUser.city = userInfo.city;
  createUser.zipCode = userInfo.zipCode;
  createUser.userType = (userInfo.userType) ? userInfo.userType : 'CUSTOMER';
  createUser.save((err, newUserInfo) => {
    if (err) {
      res.status(400).send({status: 'failure', error: err});
    } else {
      res.status(202).send({status: 'success', message: 'user created successfully', user: newUserInfo});
    }
  });
});

  userApp.post('/login', (req, res, next) => {
    let userInfo = req.body;
    let role = (userInfo.userType) ? userInfo.userType : 'CUSTOMER';

    UserSchemaModel.findOne({$and: [{username: userInfo.username}, {password: userInfo.password}, {userType: role}]}, (err, userObj) => {
      if(err) {
        res.status(500).send({status: 'failure', error: 'Internal server error'});;
      } else if(!userObj){
        res.status(403).send({status: 'failure', message: 'User not found'});
      } else {
        res.status(200).send({status: 'success', user: userObj, message: 'User found'});
      }
    });
});
