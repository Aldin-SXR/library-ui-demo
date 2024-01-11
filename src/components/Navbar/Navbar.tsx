import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'
import { logout } from '../../store/authSlice'

type Props = {}

function Navbar({ }: Props) {
    const { userToken } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Library System</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    {
                        !userToken &&
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    }
                    {
                        userToken &&
                        <li className="nav-item">
                            <a className="nav-link" style={{ color: "red" }} onClick={() => dispatch(logout())}>Log out</a>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar