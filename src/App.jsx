import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import Errore from './pages/Errore'
import FavouritesContext from './context/FauvoritesContext'
import DefaultLayout from './layouts/DefaultLayout'
import budgetContext from './context/BudgetContext'
import { useState } from 'react'
import data from './assets/data'


function App() {

  const [budgetMode, setBudgetMode] = useState(false)
  const [dataProducts, setDataProducts] = useState(data)

  function handleClick() {
    if (budgetMode === false) {
      setBudgetMode(true)
      setDataProducts()
    } else {
      setBudgetMode(false)
    }
    // console.log(budgetMode);
  }

  function filterPrice() {
    const filtered = dataProducts.filter(minPrice => minPrice.price <= 30)
    setDataProducts(filtered)
  }

  // const [favourites, setFavourites] = useState([])

  // function isFavourite(id) {
  //   return favourites.includes(id)
  // }

  // function toggleFavourites(id) {
  //   if (!isFavourite(id)) {
  //     setFavourites([id, ...favourites])
  //   } else {
  //     removeFavourite(id)
  //   }
  // }

  // function removeFavourite(id) {
  //   const filtered = favourites.filter(favId => favId !== id)
  //   setFavourites(filtered)
  // }

  return (
    <>

      <budgetContext.Provider value={{ handleClick, budgetMode, filterPrice }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/chi-siamo' element={<ChiSiamo />}></Route>
              <Route path='/prodotti' element={<Prodotti />}></Route>
              <Route path='/errore' element={<Errore />}></Route>
              <Route path='/prodotti/:id' element={<Prodotto />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </budgetContext.Provider>

    </>
  )
}

export default App
