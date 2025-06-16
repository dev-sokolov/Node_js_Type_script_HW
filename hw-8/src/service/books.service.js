import Book from "../db/Book.js";

export const getBooks = () => Book.findAll();

export const addBook = payload => Book.create(payload);

export const updateBook = (id, payload) => {
    return Book.update(payload, {
        where: {id}
    });
} 

export const deleteBook = async (id) => {
    const book = await Book.findByPk(id);
    await book.destroy();
    return book;
} 