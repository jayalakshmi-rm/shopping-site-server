import * as mongoose from 'mongoose';

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;

export interface IProductModel extends mongoose.Document {
    productName: string; // Mandatory
    productID: string; // Mandatory
    productPrice: string; // Mandatory
    availableQuality: string;
    productStatus: string; //'Out of stock - OUT_OF_STOCK, Available - AVAILABLE // Mandatory
    productDescription: string; // Mandatory
    productSizes: Array<string>; // Mandatory
    productImagePath: string; // Mandatory
    productCategory: string;
}

let schema = new Schema({
  productName: {
	   type: String,
	   required: true
  },
  productID: {
	   type: String,
	   required: true
  },
  productPrice: {
    type: String,
    required: true
},
productImagePath: {
    type: String,
    required: true
},
availableQuality: {
    type: String,
    required: true
},
productStatus: {
    type: String,
    required: true
},
productSizes: {
 type: Array,
 required: true
},
productCategory: {
 type: String,
 required: true
},
productDescription: {
    type: String,
    required: true
   }
});

export let ProductSchemaModel = mongoose.model<IProductModel>('product', schema);

// export class ProductModel {

//   private _productModel: IProductModel;

//   constructor(productModel: IProductModel) {
//     this._productModel = productModel;
//   }
//   get productName(): string {
//     return this._productModel.productName;
//   }
  
//   static createProduct(product: IProductModel) : Promise.IThenable<IProductModel> {
//     let p = new Promise((resolve, reject) => {
      
//       let repo = new HeroRepository();

//       repo.create(product, (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         else {
//           resolve(res);
//         }
//       });    
      
//     });
    
//     return p;
    
//   }
  
//   static findProduct(productCategory: string) : Promise.IThenable<IProductModel> {
//     let p = new Promise((resolve, reject) => {
//       let repo = new HeroRepository();
//       let query = {};

//       if (productCategory && productCategory.toLowerCase() !== 'all') {
//           query = {productCategory: productCategory};
//       }
//       repo.find(query).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
//         if (err) {
//           reject(err);
//         }
//         else {
//           if (res.length) {
//             resolve(res[0]);
//           }
//           else {
//             resolve(null);
//           }
//         }
//       });
//     });
    
//     return p;    
//   }

// }

// Object.seal(ProductModel);

// export interface IRead<T> {
//   retrieve: (callback: (error: any, result: any) => void) => void;
//   findById: (id: string, callback: (error: any, result: T) => void) => void;
//   findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T>;
//   find(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]>;
// }

// export interface IWrite<T> {
//   create: (item: T, callback: (error: any, result: any) => void) => void;
//   update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
//   delete: (_id: string, callback: (error: any, result: any) => void) => void;
// }

// export class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

//   private _model: mongoose.Model<mongoose.Document>;

//   constructor(schemaModel: mongoose.Model<mongoose.Document>) {
//     this._model = schemaModel;
//   }

//   create(item: T, callback: (error: any, result: T) => void) {
//     this._model.create(item, callback);
//   }

//   retrieve(callback: (error: any, result: T) => void) {
//     this._model.find({}, callback);
//   }

//   update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
//     this._model.update({ _id: _id }, item, callback);
//   }

//   delete(_id: string, callback: (error: any, result: any) => void) {
//     this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
//   }

//   findById(_id: string, callback: (error: any, result: T) => void) {
//     this._model.findById(_id, callback);
//   }

//   findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T> {
//     return this._model.findOne(cond, callback);
//   }

//   find(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]> {
//     return this._model.find(cond, options, callback);
//   }

//   private toObjectId(_id: string): mongoose.Types.ObjectId {
//     return mongoose.Types.ObjectId.createFromHexString(_id);
//   }

// }

// export class ProductRepository extends RepositoryBase<IProductModel> {
//   constructor() {
//     super(ProductSchemaModel);
//   }
// }

// Object.seal(ProductRepository);
