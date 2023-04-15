class Comment {
    constructor(username, body) {
        this.username = username
        this.body = body
        this.createdAt = new Date()
    }
}

module.exports = Comment