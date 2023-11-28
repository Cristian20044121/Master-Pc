import mongoose from "mongoose";
import DBMongoDB from "./DB/mongoDB.js";

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    brand: String,
    category: String,
    longDescription: String,
    mainPhoto: {
        type: String,
        required: true
    }
});


const productsModel = mongoose.model('products', productSchema);

class ProductModelMongoDB {
    // CRUD CREATE 
    async createProduct(product) {
        if (!await DBMongoDB.connectDB()) {
            return {};
        }

        try {
            const newProduct = new productsModel(product);
            await newProduct.save();
            console.log('Producto dado de alta correctamente:', newProduct);
            return newProduct;
        } catch (error) {
            console.error('Error al intentar dar de alta el producto:', error);
            return {};
        }
    }

    // CRUD READ 
    async getProducts() {
        if (!await DBMongoDB.connectDB()) {
            return [];
        }

        try {
            const products = await productsModel.find({});
            return products;
        } catch (error) {
            console.error('Error al intentar leer los productos:', error);
            return [];
        }
    }

    async getProduct(id) {
        if (!await DBMongoDB.connectDB()) {
            return {};
        }

        try {
            const product = await productsModel.findById(id) || {};
            return product;
        } catch (error) {
            console.log('Error al intentar leer el producto #:', id, error.message);
            return {};
        }
    }

    // CRUD UPDATE 
    async updateProduct(id, product) {
        if (!await DBMongoDB.connectDB()) {
            return {};
        }

        try {
            const updateProduct = await productsModel.findByIdAndUpdate(id, { $set: product }, {
                new: true, // Devolver el documento actualizado
            });

            return updateProduct || {};
        } catch (error) {
            console.error('Error al intentar actualizar el producto #:', id, error.message);
            return {};
        }
    }

    // CRUD DELETE 
    async deleteProduct(id) {
        if (!await DBMongoDB.connectDB()) {
            return {};
        }

        try {
            const deleteProduct = await productsModel.findByIdAndDelete(id) || {};
            return deleteProduct;
        } catch (error) {
            console.error('Error al intentar eliminar el producto #:', id, error.message);
            return {};
        }
    }
}

export default ProductModelMongoDB;
