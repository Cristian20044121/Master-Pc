import config  from '../config.js';
import Model from '../models/products.js';

const model = Model.get(config.PERSISTENCE_TYPE);





// API GET ALL 
const getProducts = async () =>{
    const products = await model.getProducts();
    return products;
}

// API GET ONE 

const getProduct = async id =>{
    const product = await model.getProduct(id);
    return product;
}

// API CREATE 

const createProduct = async product =>{
    const createProduct = await model.createProduct(product);
    return createProduct;
}

// API UPDATE 

const updateProduct = async (id, product) =>{
    const updateProduct = await model.updateProduct(id, product);
    return updateProduct;
}

// API DELETE 

const deleteProduct = async id =>{
    const deleteProduct = await model.deleteProduct(id);
    return deleteProduct;
}

export default{
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}