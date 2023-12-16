import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";
import { HandleError } from "./errors/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/books" , booksRouter)

app.use(HandleError.execute)