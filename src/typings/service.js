class Service {
    constructor(model) {
        this.model = model;
    }

    async getAll(query = {}) {
        return await this.model.find(query);
    }

    async getById(id) {
        return await this.model.findById(id);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new:true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

export default Service;