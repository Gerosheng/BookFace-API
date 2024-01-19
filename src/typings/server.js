export default class Server {
    constructor(app, database, port){
        this.app= app;
        this.port = port;
        this.database = database;
    };
    /* RUN SERVER */
    run() {
        return this.app.listen(this.port, () => {
            console.log(`Server is running on port: ${this.port}`)
        });
    };
    /* LOAD MIDDLEWARES */
    loadMiddlewares(middlewares){
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    /* INIT DATABASE */
    initDatabase() {
        return this.database.connectDB()
    };


}