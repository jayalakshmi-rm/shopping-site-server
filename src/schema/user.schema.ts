import * as mongoose from 'mongoose';

export let Schema = mongoose.Schema;

export interface IUserModel extends mongoose.Document {
    username: string; // Mandatory
    password: string; // Mandatory
    emailId: string; // Mandatory
    userType: string; 
    phoneNumber: number;
    country: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    zipCode: string;
}

let schema = new Schema({
  username: {
	   type: String,
	   required: true
  },
  password: {
	   type: String,
	   required: true
  },
  phoneNumber: {
    type: Number,
    required: true
},
  emailId: {
    type: String,
    required: true
},
country: {
    type: String,
    required: true
},
userType: {
    type: String,
    default: 'CUSTOMER'
},
addressLine1: {
    type: String
},
addressLine2: {
    type: String
},
city: {
    type: String
},
zipCode: {
    type: String,
    required: true
}
});

export let UserSchemaModel = mongoose.model<IUserModel>('user', schema);