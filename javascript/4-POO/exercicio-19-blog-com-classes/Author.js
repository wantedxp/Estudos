const Post = require('./Post')

class Author {
    constructor(name) {
        this.name = name
        this.post = []
    }

    writePost(title, body) {
        const post = new Post(title, body, this)
        return post
    }
}

module.exports = Author