import { Book } from '../../utils/types'
import { Link } from 'react-router-dom'

type Props = {
    book: Book
}

const BookCard = ({ book }: Props) => {
    return (
        <div className="col-12 col-md-3">
            <div className="card" style={{ width: "20rem", margin: '20px' }}>
                <div className="card-header">
                    ISBN: { book.isbn }
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ book.title }</h5>
                    <p className="card-text">
                        Category: { book.category }
                        <br />
                        Publication year: { book.publicationYear }
                        <br />
                        Number of pages: { book.numberOfPages }
                    </p>
                    <Link to={`/books/${book.isbn}`} className="btn btn-info">View Book</Link>
                    <a href="#" className="btn btn-primary">Borrow</a>
                </div>
            </div>
        </div>
    )
}

export default BookCard