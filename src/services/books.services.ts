import { booksDatabase } from "../database/database";
import { CreateData, IBooksInterface, createOptionalData, generateId } from "../interfaces/booksInterface"

export class BooksServices{

    getBooks() {
        return booksDatabase
    }

    getOneBook(id : string  ){
        const findBook = booksDatabase.find(book => book.id === Number(id))

        return findBook
    }

    createBook = (data: CreateData) : IBooksInterface => {
        const newBook : IBooksInterface =  {
            id: generateId(),
            ...data,
            createdAt: new Date(),
            updateAt: new Date()
        }

        booksDatabase.push(newBook)
        return newBook
    }

    updateBook(id: string , data : createOptionalData): IBooksInterface{
        const index : number = booksDatabase.findIndex(book => book.id === Number(id))

        const updateBook: IBooksInterface = {
            ...booksDatabase[index],
            ...data ,
            createdAt : new Date(),
            updateAt : new Date()
        }
       

        booksDatabase.splice(index , 1 , updateBook)
        return updateBook
    }

    deleteBook(id : string){
        const index = booksDatabase.findIndex(book => book.id === Number(id))

        booksDatabase.splice(index , 1)
    }


}