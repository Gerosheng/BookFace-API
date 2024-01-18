import Service from "./service.js"

class Controller {
    constructor() {
        this.service = new Service();
    }

    getHandler = (req, res) => {
        const data = this.service.getData();
        res.send(data);
    }

    postHandler
}