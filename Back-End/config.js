const PERSISTENCE_TYPE = {
    TYPE_MONGODB : 'MONGODB'
};

const config = {
    PORT: 3001,
    PERSISTENCE_TYPE: PERSISTENCE_TYPE.TYPE_MONGODB,
    MONGODB_CONNECTION_STR: 'mongodb+srv://crdcaro01:cristian@cluster0.2n5wik2.mongodb.net/masterpc',
    MONGODB_TIMEOUT: 2000,
}

export {PERSISTENCE_TYPE, config as default}