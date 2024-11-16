import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Product from './Pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
