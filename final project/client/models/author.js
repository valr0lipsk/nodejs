const authors = [];

module.exports = class AuthorModel {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    static find(){
        return authors;
    }
}