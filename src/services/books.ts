import appAxios from "./appAxios";
import { Book } from "../utils/types";

const getBooks = async (): Promise<Book[]> => {
   return appAxios.get('/books/').then(
       (response) => {
           const data = response.data;
           console.log(response);
           console.log(data);

           return data;
       });
}

const addBook = async (book: Book): Promise<Book[]> => {
    return appAxios.post('/books/', book).then(
        (response) => {
            const data = response.data;
            console.log(response);
            console.log(data);
 
            return data;
        });
 }

export default { getBooks, addBook };