let books = [];
let id = 0;

module.exports = {
    read: (req, res, next) => {
        res.status(200).send(books);
    },
    create: (req, res, next) => {
        const { title, author } = req.body;
        let newBook = {
            id, 
            title, 
            author
        };
        books.push(newBook);
        id++;

        res.status(200).send(books);
    },
    update: (req, res, next) => {
        const { id } = req.params;
        const index = books.findIndex((book) => {
            return book.id === +id;
        });
        if (index !== -1){
            books[index] = {
                id: books[index].id,
                title: req.body.title || books[index].title,
                author: req.body.author || books[index].author
            };
            res.status(200).send(books);
        }else {
            res.status(404).send('Book not found!');
        }
    },
    delete: (req, res, next) => {
        const { id } = req.params;
        const index = books.findIndex((book) => {
            return book.id === +id;
        });

        if (index !== -1) {
            books.splice(index, 1);
            res.status(200).send(books);
        }else {
            res.status(404).send('Book not found!');
        }
    }
}