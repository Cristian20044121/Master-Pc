import express from 'express';
import cors from 'cors'; // Importa el middleware cors
import RouterProducts from './Routers/products.js';
import config from './config.js';

const app = express();
const PORT = config.PORT;

// Configura CORS para permitir solicitudes desde cualquier origen (en desarrollo)
app.use(cors());

app.use(express.json());
app.use('/api/products', RouterProducts);

app.listen(PORT, () => {
    console.log('servidor corriendo en puerto', PORT);
});
