import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Identification from './Identification'
import FavoriteFood from './FavoriteFood'
import FavoritePorkDish from './FavoriteFood copy'
import Counter from './Counter'
import Function from './Function'
import Paragraph from './Paragraph'
import MyCart from './MyCart'

function App() {
  const [count, setCount] = useState(0)

  const fruits = [
    {id: 1, name: "Banana", color: "yellow" , rating: 9},
    {id: 2, name: "Apple", color: "red", rating: 8},
    {id: 3, name: "Cherry", color: "red", rating: 8},
    {id: 4, name: "Tomato", color: "red", rating: 1},
    {id: 5, name: "Strawberry", color: "red", rating: 8}
  ]

  const porkDishes = [
  ]


  return (
    <>
      <Header />
      <Identification />
      {fruits.length > 0 && <FavoriteFood items={fruits} category='My Favorite Fruits'/>}
      {porkDishes.length > 0 && <FavoritePorkDish items={porkDishes} category='My Favorite Pork Dish' />}
      <Counter />
      <Function />
      <Paragraph />
      <MyCart />
      <Footer />
    </>
  )
}

export default App
