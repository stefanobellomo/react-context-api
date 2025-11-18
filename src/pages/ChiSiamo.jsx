import { useState } from "react"

export default function ChiSiamo() {

    const faqs = [
        {
            id: 1,
            question: 'Chi siamo?',
            answer: 'siamo un negozio online specializzato in prodotti di alta qualità.'
        },
        {
            id: 2,
            question: 'Cosa offriamo?',
            answer: 'Offriamo una vasta gamma di prodotti di alta qualità per soddisfare le esigenze dei nostri clienti.'
        },
        {
            id: 3,
            question: 'Perché scegliere noi?',
            answer: 'Perché offriamo prodotti di alta qualità, un servizio clienti eccellente e spedizioni rapide.'
        },
        {
            id: 4,
            question: 'Come contattarci?',
            answer: 'Puoi contattarci tramite email all\'indirizzo info@negozio.com.'
        },
        {
            id: 5,
            question: 'Dove siamo ubicati?',
            answer: 'Siamo ubicati in Via Roma 123, Milano.'
        }
    ]

    const [active, setActive] = useState(0)

    function handleClick(id) {
        if (active === id) {
            setActive(0)
        } else {
            setActive(id)
        }
    }

    return (

        <>

            <main>
                <div className="faqs container p-3">
                    {faqs.map(item => (
                        <div key={item.id}>
                            <h4 onClick={() => handleClick(item.id)}>{item.question}</h4>
                            {item.id === active && <p>{item.answer}</p>}
                        </div >
                    ))
                    }
                </div>
            </main>

        </>
    )
}