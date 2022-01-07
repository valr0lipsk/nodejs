const posts = [];

module.exports = class PostModel {
    constructor(title, body, excerpt, categories, tags, author) {
        this.title = title;
        this.body = body;
        this.excerpt = excerpt;
        this.categories = categories;
        this.tags = tags;
        this.author = author;
    }

    static find(){
        return posts;
    }

    static findOne(id = 0){
        return posts.find((post) => +post._id === +id);
    }
}