import negozio from "../assets/imggg.jpg";

export default function HomePage() {
    return (
        <>
            <main>

                <div className="container d-flex flex-row align-items-center gap-5 p-5">
                    <div>
                        <img className="jumbotron" src={negozio} alt="Negozio Online" />
                    </div>
                    <div className="welcome">
                        <h3>Benvenuti nel nostro negozio online!</h3>
                        <p>Scopri una vasta gamma di prodotti di alta qualità a prezzi imbattibili. Offriamo offerte esclusive ogni settimana, quindi non perdere l'occasione di fare affari incredibili!</p>
                    </div>
                </div>

            </main >
        </>
    )
}