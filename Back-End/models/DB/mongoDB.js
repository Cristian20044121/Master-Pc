import config from "../../config.js";
import mongoose from 'mongoose';

class DBMongoDB {
    static READY_STATE_DISCONNECTED = 0;
    static READY_STATE_CONNECTED = 1;
    static READY_STATE_CONNECTING = 2;
    static READY_STATE_DISCONNECTING = 3;

    static async connectDB() {
        try {
            if (mongoose.connection.readyState === DBMongoDB.READY_STATE_CONNECTED) {
                console.log('La conexión ya está establecida.');
                return true;
            }

            await mongoose.connect(config.MONGODB_CONNECTION_STR, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: config.MONGODB_TIMEOUT
            });

            console.log('Conexión con la base de datos establecida correctamente.');
            return true;
        } catch (error) {
            console.error(`Error al intentar establecer la conexión con MongoDB. Detalle: ${error.message}`);
            return false;
        }
    }

    static handleConnectionEvents() {
        mongoose.connection.on('connected', () => {
            console.log('Conectado a MongoDB.');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Desconectado de MongoDB.');
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Error en la conexión a MongoDB: ${err}`);
        });

        mongoose.connection.on('reconnected', () => {
            console.log('Reconectado a MongoDB.');
        });
    }
}

export default DBMongoDB;
