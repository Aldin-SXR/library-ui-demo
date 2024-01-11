import { useParams } from 'react-router-dom'
import { bookList } from '../constants'
import { Book } from '../utils/types'

type Props = {}

function BookPage({ }: Props) {

    const { isbn } = useParams()
    const book: Book | undefined = bookList.find(b => b.isbn === isbn)

    if (book) {
        return (
            <div className="col-12 col-md-3">
                <div className="card" style={{ width: "20rem", margin: '20px' }}>
                    <div className="card-header">
                        ISBN: {book.isbn}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>{book.category}</h6>
                        <p className="card-text">
                            Language: {book.language}
                            <br />
                            Publication year: {book.publicationYear}
                            <br />
                            Number of pages: {book.numberOfPages}
                        </p>
                        <a href="#" className="btn btn-primary">Borrow</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <p>This book does not exist.</p>
    )

}

export default BookPage