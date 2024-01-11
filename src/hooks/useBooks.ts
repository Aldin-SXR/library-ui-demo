import { useQuery } from "react-query";
import { BookService } from "../services";
import { Book } from "../utils/types";
import { AxiosError } from "axios";

const useBooks = () => {
   return useQuery<Book[], AxiosError>('books',
       () => BookService.getBooks(),
       { refetchOnWindowFocus: false }
   );
}

export default useBooks;