import Service from "./service.js"

class Controller {
    constructor(Service) {
        this.service = Service;
    }

    getHandler = (req, res) => {
        const data = this.service.getData();
        res.send(data);
    }

    postHandler
}