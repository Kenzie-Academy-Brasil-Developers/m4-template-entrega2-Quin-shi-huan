import "express-async-errors"
import { Response, Request, NextFunction } from "express"
import { AppError } from "./errors"

export class HandleError {
    static execute(err: Error, req: Request, res: Response, next: NextFunction){
        if(err instanceof AppError){
            return res.status(err.statusCode).json({ error: err.message})
        }
            return res.status(500).json({ message : "Internal server error"})
    }
}