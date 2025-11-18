import error from "../assets/rick&dragon.jpeg";
import { Link } from "react-router-dom"

export default function Errore() {
    return (
        <div className="error container">
            <h1 className="fw-bold">Err.404 page is not found, please <Link className="btn btn-warning fw-bold" to={`/prodotti`}>click me</Link> and return or roll a joint for chilling</h1>
            <img className="error-image my-5" src={error} alt="error" />

        </div>
    )
}