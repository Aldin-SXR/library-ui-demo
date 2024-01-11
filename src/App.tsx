import { Route, Routes } from "react-router-dom"
import { About, BookPage, Home, Login, NotFound, Profile, Register } from "./pages"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./utils/ProtectedRoute"

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books/:isbn" element={<BookPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          {/* ... */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
