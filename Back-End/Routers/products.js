import express  from "express";
import controllers from '../controllers/products.js';


const router = express.Router();


// Getproducts

router.get('/', controllers.getProducts);

router.get('/:id', controllers.getProduct);


// PostProducts
router.post('/', controllers.postProduct);


// PutProducts
router.put('/:id', controllers.putProduct);


// DeleteProducts

router.delete('/:id', controllers.deleteProduct);


export default router;
