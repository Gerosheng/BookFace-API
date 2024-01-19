import mongoose from 'mongoose'

export const databaseSingleton = (() => {
    let instanceDB;

    const createInstanceDB = (dbURI) => {
        const database = new Database(dbURI);
        return database;
    };

    return {
        getInstanceDB: () => {
            if (!instanceDB) {
                instanceDB = createInstanceDB();
            }
            return instanceDB;
        },
    };
})();

class Database {
    constructor(dbURI){
        this.connectionString = dbURI || ''
    }
    async connectDB() {
        try{
            await mongoose.connect(this.connectionString/*
            deprecated options
            , {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }*/)
            console.log('MongoDB connected successfully')
            } catch (error) {
            console.error('MongoDB connection error:', error)
            }
      }
}
