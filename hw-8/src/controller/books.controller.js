import * as BooksServiece from "../service/books.service.js"

export const getBooksController = async (req, res) => {
    const result = await BooksServiece.getBooks();
    res.json(result);
}

export const addBookController = async (req, res) => {
    const result = await BooksServiece.addBook(req.body);
    res.status(201).json(result);
}

export const updateBookController = async (req, res) => {
    const { id } = req.params;
    await BooksServiece.updateBook(id, req.body);
    res.json({ message: "Book updated successfully" });
}

export const deleteBookController = async (req, res) => {
    const { id } = req.params;
    const result = await BooksServiece.deleteBook(id);
    res.json(result);
}