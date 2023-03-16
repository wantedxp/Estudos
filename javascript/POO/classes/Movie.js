class Book {
    constructor(title, pages, author) {
        this.title = title
        this.pages = pages
        this.author = author
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const eragon = new Book('Eragon', 486, 'Crhis')

const eldest = new Book('Eldest', 350, 'Crhis')
eragon.publish()
console.log(eragon)
console.log(eldest)