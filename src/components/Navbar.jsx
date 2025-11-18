import { NavLink } from "react-router-dom"
import { useContext } from "react"
import budgetContext from "../context/BudgetContext"

export default function Navbar() {

    const { handleClick, budgetMode } = useContext(budgetContext)

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={'/'}>Homepage</NavLink>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to={'/chi-siamo'}>Chi siamo</NavLink>
                    </div>
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to={'/Prodotti'}>Prodotti</NavLink>
                    </div>
                    <button className="btn btn-primary" onClick={handleClick}>{budgetMode ? 'Attiva modalità budget' : 'Disattiva modalita budget'}</button>
                </div>
            </div>
        </nav>
    )
}