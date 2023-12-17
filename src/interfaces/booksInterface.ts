export interface IBooksInterface {
    id: number;
    name: string;
    pages: number;
    category?: string | undefined;
    createdAt: Date ; 
    updatedAt: Date;
}

export type CreateData = Pick<IBooksInterface, "name" | "pages" | "category" >

export type createOptionalData = Partial<IBooksInterface>;

export type DeleteMessage = {
    message : string
}

let id = 0;

export const generateId = () => {
    id++
    return id
}