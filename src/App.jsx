import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'
import './App.css'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/carrinho" element={<CartPage />} />
            </Route>
        </Routes>
    )
}

export default App