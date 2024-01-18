import mongoose from 'mongoose'

export default class Database {
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