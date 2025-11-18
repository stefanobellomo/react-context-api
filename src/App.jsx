import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import Errore from './pages/Errore'
import DefaultLayout from './layouts/DefaultLayout'
import budgetContext from './context/BudgetContext'
import data from './assets/data'
import { useState, useEffect } from 'react'

function App() {

  const [budgetMode, setBudgetMode] = useState(false)
  const [products, setProducts] = useState(data)

  function handleClick() {
    setBudgetMode(!budgetMode)
  }

  useEffect(() => {
    if (budgetMode) {
      filterPrice()
    } else {
      setProducts(data)
    }
  }, [budgetMode])

  function filterPrice() {
    const filtered = products.filter((product) => product.price <= 30)
    setProducts(filtered)
  }

  return (
    <>

      <budgetContext.Provider value={{ handleClick, budgetMode, products }}>
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
