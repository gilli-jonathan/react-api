import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./Card"

function App() {

  const attrici = "https://lanciweb.github.io/demo/api/actresses/"
  const [arrAttrici, setArrAttrici] = useState([])

  const attori = "https://lanciweb.github.io/demo/api/actresses/"
  const [arrAttori, setArrAttori] = useState([])

  useEffect(() => axiosCall(), [])

  function axiosCall() {
    axios.get(attrici)
      .then((resp) => { setArrAttrici(resp.data) });
  }


  return (
    <>
      <h1 className="my-5">ATTORI DI HOLLYWOOD</h1>

      {arrAttrici.map((obj) => (
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


      ))}



    </>
  )
}

export default App
