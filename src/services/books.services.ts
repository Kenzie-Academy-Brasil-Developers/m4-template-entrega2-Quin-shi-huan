import { booksDatabase } from "../database/database";
import { TBook, TCreateBookBody, TEditBodySchema, generateId } from "../interfaces/booksInterface"

export class BooksServices {

    getBooks(search? : string) {
        console.log(search)
        if (search) {
            console.log("entrei")
            const searchValue = booksDatabase.filter(book => book.name.toLowerCase().includes(search.toLowerCase()))

            return searchValue
         }

        return booksDatabase
    }

    getOneBook(id: string) {
        const findBook = booksDatabase.find(book => book.id === Number(id))

        return findBook
    }

    createBook = (data: TCreateBookBody): TBook => {
        const newBook: TBook = {
            id: generateId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        booksDatabase.push(newBook)
        return newBook
    }

    updateBook(id: string, data: TEditBodySchema): TBook {
        const index: number = booksDatabase.findIndex(book => book.id === Number(id))

        const updateBook: TBook = {
            ...booksDatabase[index],
            ...data,
        }


        booksDatabase.splice(index, 1, updateBook)
        return updateBook
    }

    deleteBook(id: string) {
        const index = booksDatabase.findIndex(book => book.id === Number(id))

        booksDatabase.splice(index, 1)
    }


}