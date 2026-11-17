
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product])
  }

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#222' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={handleThemeToggle}
      />

      <br />
      <br />

      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
