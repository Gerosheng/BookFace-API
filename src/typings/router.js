import express from 'express'

class Router {
    constructor(){
        this.router = express.Router();
        this.routes = [path, method, handler, localMiddleware];
        this.controller = new Controller();
        this.initializeRoutes();
    }

    initializeRoutes() {
        for( const route of this.routes) {
            for (const middleware of route.localMiddleware) {
                this.router.use(route.path, middleware)
            };
            switch (route.method) {
                case 'GET':
                    this.router.get(route.path, route.handler);
                    break;
                case 'POST':
                    this.router.post(route.path, route.handler);
                    break;
                case 'PUT':
                    this.router.put(route.path, route.handler);
                    break;
                case 'DELETE':
                    this.router.delete(route.path, route.handler);
                    break;          
            };
        };
        return this.router;
    };
};