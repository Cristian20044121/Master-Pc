import api from '../api/products.js';

// GET CONTROLLER 

const getProducts = async (req, res) =>{
    res.json(await api.getProducts());
};


const getProduct = async ( req, res) =>{
    const id = req.params.id;
    res.json(await api.getProduct(id));
};



// PORT CONTROLLER 

const postProduct = async(req, res) =>{
    try{
        const {mainPhoto, ...productData} = req.body;
        const product = {
            ...productData,
            mainPhoto,
        };

        const createProduct = await api.createProduct(product);
        res.json(createProduct);
    }

    catch (error) {
        res.status(500).json({message: 'Error al agregar nuevo producto'});
    }
}


// PUT CONTROLLER 

const putProduct = async (req, res) =>{
    const id = req.params.id;
    const product = req.body;
    const updateProduct = await api.updateProduct(id, product);
    res.json(updateProduct);
}


// DELETE CONTROLLER 

const deleteProduct = async (req,res) =>{
    const id = req.params.id;
    const deleteProduct = await api.deleteProduct(id);
    res.json(deleteProduct);
}


export default{
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}