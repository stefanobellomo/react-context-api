import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


export default function DefaultLayout() {
    return (
        <>
            <header>

                <Navbar />

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Nuove offerte ogni settimana!!!</h1>
                        <p className="col-md-8 fs-4">
                            Scopri i nostri prodotti esclusivi a prezzi imbattibili. Non perdere l'occasione di fare affari incredibili! <br />
                            Ogni settimana, nuove offerte ti aspettano. Visita la nostra sezione Prodotti per saperne di più.
                        </p>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer className="py-4 bg-light">
                <div className="container">
                    <div className="row row-cols-4">
                        <div className="col">
                            <h3>Social</h3>
                            <ul className="list-unstyled">
                                <li><a href="https://facebook.com" target="_blank" >Facebook</a></li>
                                <li><a href="https://twitter.com" target="_blank" >Twitter</a></li>
                                <li><a href="https://instagram.com" target="_blank" >Instagram</a></li>
                                <li><a href="https://linkedin.com" target="_blank" >LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Link alla pagina</h3>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/prodotti">Prodotti</a></li>
                                <li><a href="/chi-siamo">Chi siamo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}