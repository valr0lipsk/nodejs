const tags = [];

module.exports = class TagModel {
    constructor(name) {
        this.name = name;
    }

    static find(){
        return tags;
    }
}