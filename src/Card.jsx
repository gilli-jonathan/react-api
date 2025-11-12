export default function Card({ obj }) {





    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={obj.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Nome</h5>
                <p className="card-text">{obj.name}</p>
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

    )
}