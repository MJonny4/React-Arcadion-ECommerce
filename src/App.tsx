import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from './components'
import { About, Cart, Checkout, Error, Home, PrivateRoute, Products, SingleProduct } from './pages'

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route
                    path='/checkout'
                    element={
                        <PrivateRoute>
                            <Checkout />
                        </PrivateRoute>
                    }
                />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
