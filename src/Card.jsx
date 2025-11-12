export default function Card({ obj }) {





    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>

                <img src={obj.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Nome</h5>
                    <h4 className="card-text">{obj.name}</h4>

                    <div className="accordion">
                        <div className="accordion-item">

                            <h2 className="accordion-header" id={`heading-${obj.id}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-${obj.id}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse-${obj.id}`}
                                >
                                    Scopri di più
                                </button>
                            </h2>

                            <div
                                id={`collapse-${obj.id}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading-${obj.id}`}

                            >
                                <div className="accordion-body">
                                    <h6 className="card-title">anno di nascita</h6>
                                    <p className="card-text">{obj.birth_year}</p>
                                    <h6 className="card-title">nazionalità</h6>
                                    <p className="card-text">{obj.nationality}</p>
                                    <h6 className="card-title">biografia</h6>
                                    <p className="card-text">{obj.biography}</p>
                                    <h6 className="card-title">premi</h6>
                                    <p className="card-text">{obj.awards}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}