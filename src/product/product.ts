import express = require('express');
export const productApp = express();
import {ProductSchemaModel, IProductModel} from '../schema/product.schema';

productApp.get('/productlist', (req, res) => {
    ProductSchemaModel.find({}, (err, productList) => {
        if(err) {
            res.status(400).send({status: 'failure', error: err});
        } else {
            res.status(200).send({status: 'success', productList: productList});
        }
    })
});

productApp.post('/addproduct', (req, res) => {
    let newProduct = new ProductSchemaModel();
    let product: IProductModel = req.body;
    newProduct.productID = product.productID;
    newProduct.productDescription = product.productDescription;
    newProduct.productCategory = product.productCategory;
    newProduct.productImagePath = product.productImagePath;
    newProduct.productName = product.productName;
    newProduct.productPrice = product.productPrice;
    newProduct.productStatus = product.productStatus;
    newProduct.productSizes = product.productSizes;
    newProduct.availableQuality = product.availableQuality;
    newProduct.save(req.body, (err, createdProduct) => {
        if(err) {
            res.status(400).send({status: 'failure', error: err});
        } else {
            res.status(202).send({status: 'success', product: createdProduct});
        }
    })
});

productApp.post('/editproduct/:productID', (req, res) => {

    let product: IProductModel = req.body;
    product.productID = req.params.productID;

    ProductSchemaModel.findOneAndUpdate({productID: req.params.productID}, product, {new: true}, (err, updatedProduct) => {
        if(err) {
            res.status(400).send({status: 'failure', error: err});
        } else {
            res.status(200).send({status: 'success', product: updatedProduct});
        }
    })
});

productApp.get('/productdetails/:productID', (req, res) => {

    let product: IProductModel = req.body;
    product.productID = req.params.productID;

    ProductSchemaModel.findOne({productID: req.params.productID}, (err, product) => {
        if(err || !product) {
            let msg = (err) ? err : req.params.productID + ' Details not found';
            res.status(400).send({status: 'failure', error: msg});
        } else {
            res.status(200).send({status: 'success', product: product});
        }
    })
});

productApp.use((req, res) => {
    res.status(400).send({status: 'failure', error: 'File not found'});
});
