import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Prodotti() {

    const endpoint = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    useEffect(handleGet, [])

    function handleGet() {
        axios.get(endpoint)
            .then(res => {
                setProducts(res.data)
            })
    }

    console.log(products);


    return (
        <>

            <main>
                <div className="row row-cols-1 row-cols-lg-2 g-3">

                    {products.map((product) => (
                        <div key={product.id} className="col">
                            <div className="card h-100 product-card d-flex flex-row p-3 gap-3">
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="d-flex flex-column product-content">
                                    <h3>{product.title}</h3>
                                    <p className="d-none">
                                        <span className="fs-5">{product.description}</span>
                                    </p>
                                    <span className="bord-card fw-bold py-2">Categoria: {product.category}</span>
                                    <span className="price bord-card fw-bold">Prezzo: {product.price}$</span>
                                    <div className="rating d-flex justify-content-between align-items-center">
                                        <span className="bord-card fw-bold py-2">Rate: {product.rating.rate}</span>
                                        <span className="bord-card fw-bold">N. Recensioni: {product.rating.count}</span>
                                    </div>
                                    {/* link per collegarsi alla card del prodotto */}
                                    <Link className="link mt-2" to={`/prodotti/${product.id}`}>Visualizza scheda prodotto</Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </main>
        </>
    )
}