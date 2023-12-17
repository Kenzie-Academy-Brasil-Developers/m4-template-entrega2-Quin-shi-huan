import { Request, Response, Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { CreateIsTrue } from "../middlewares/createdIsTrue.middleware";

export const booksRouter = Router()

const booksControllers = new BooksControllers()

const createdIsTrue = new CreateIsTrue()


booksRouter.get("/", booksControllers.getBooks)

booksRouter.get("/:id", IsBookIdValid.execute ,  booksControllers.getOneBook )

booksRouter.post("/",createdIsTrue.checkingIfBookNameIsNotRepeat ,booksControllers.createBook )

booksRouter.use("/:id" , createdIsTrue.checkingIfBookNameIsNotRepeat )

booksRouter.patch("/:id",IsBookIdValid.execute , booksControllers.updateBooks)

booksRouter.delete("/:id", IsBookIdValid.execute ,  booksControllers.deleteBook )