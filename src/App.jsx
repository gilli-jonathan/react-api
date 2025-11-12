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
      <h1 className="my-5 container">ATTORI DI HOLLYWOOD</h1>

      <section className="container">
        <div className="row row-cols-4 g-2">
          {arrAttrici.map((obj) => (
            <Card key={obj.id} obj={obj} />
          ))}

        </div>

      </section>




    </>
  )
}

export default App
