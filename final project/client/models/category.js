const categories = [];

module.exports = class CategoryModel {
    constructor(name) {
        this.name = name;
    }

    static find(){
        return categories;
    }
}