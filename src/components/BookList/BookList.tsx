import { ChangeEvent } from 'react'
import { bookList } from '../../constants'
import { Book } from '../../utils/types'
import BookCard from '../BookCard'
// import { BookService } from '../../services'
import { useBooks } from '../../hooks'
import useCreateBook from '../../hooks/useCreateBook'


const BookList = () => {
    const { data: books, isLoading, error } = useBooks()
    const createBook = useCreateBook()

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        let filteredBooks = bookList.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(filteredBooks)
    }

    const addNewBook = () => {
        let book: Book = {
            id: "1",
            isbn: "545454",
            category: "Test",
            title: "Test",
            publicationYear: 2023,
            numberOfPages: 700,
            language: "en",
            creationDate: "2023-12-28"
        }

        createBook.mutate(book)
    }

    return (
        <>
            <button onClick={addNewBook}>Add book</button>
            <div className="row">
                <div className="col-12 col-md-3">
                <div className="form-group m-2">
                    <input type="text" className="form-control" placeholder="Search..." onChange={search} />
                </div>
                </div>
            </div>
            {
                isLoading && 
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    {error?.message}
                </div>
            }
            {/* {
                books.length === 0 &&
                <p>
                    The book you are searching for does not exist.
                </p>
            } */}
            {
                !isLoading &&
                <div className="row">
                    {
                        books && books.map((book, i) => (
                            <BookCard key={i} book={book} />
                        ))
                    }
                </div>
            }
        </>
    )
}

export default BookList