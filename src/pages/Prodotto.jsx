import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import FavouritesContext from "../context/FauvoritesContext"
import { useContext } from "react"
import data from "../assets/data"

export default function Prodotto() {

    // const { toggleFavourites, isFavourite } = useContext(FavouritesContext)

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(data)
    // 
    const nextId = Number(id) + 1
    const prevId = Number(id) - 1

    console.log(product);


    // function fetchData() {
    //     axios.get(`https://fakestoreapi.com/products/${id}`)
    //         .then(response => {
    //             setProduct(response.data)
    //             if (response.data === '') {
    //                 console.log('error 404');
    //                 navigate('/errore')
    //             }
    //         })
    // }

    // useEffect(fetchData, [id])

    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card h-100 product-card d-flex flex-row p-3 gap-3">
                                    <div className="product-image-wrapper">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="d-flex flex-column product-content">
                                        {/* <button className="btn like" onClick={() => toggleFavourites(product.id)}>
                                            <i className={`bi bi-heart${isFavourite(product.id) ? '-fill' : ''}`}></i>
                                        </button> */}
                                        <h3>{product.title}</h3>
                                        <p className="">
                                            <span className="fs-5">{product.description}</span>
                                        </p>
                                        <span className="bord-card fw-bold py-2">Categoria: {product.category}</span>
                                        <span className="price bord-card fw-bold">Prezzo: {product.price}$</span>
                                        <div className="rating d-flex justify-content-between">
                                            <span className="bord-card fw-bold py-2">Rate: {product.rating.rate}</span>
                                            <span className="bord-card fw-bold">N. Recensioni: {product.rating.count}</span>
                                        </div>
                                        {/* link per collegarsi alla card del prodotto, alla pagina precedente e successiva */}
                                        <Link className="btn btn-dark mt-3" to={`/prodotti`}>Ritorna ai prodotti</Link>
                                        <Link className="btn btn-dark my-2" to={`/prodotti/${prevId}`}>Prodotto precedente</Link>
                                        <Link className="btn btn-dark" to={`/prodotti/${nextId}`}>Prodotto successivo</Link>
                                        {/* <Link
                                            className="btn btn-dark w-50 my-3"
                                            onClick={(e) => {
                                                e.preventDefault(); // evita il comportamento predefinito del link
                                                navigate(/products/${ back });
                                            }}
                                        > */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}