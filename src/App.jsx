import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./Card"

function App() {

  const attrici = "https://lanciweb.github.io/demo/api/actresses/"
  const [arrAttrici, setArrAttrici] = useState([])

  const attori = "https://lanciweb.github.io/demo/api/actresses/"
  const [arrAttori, setArrAttori] = useState([])


  axios.get(attrici)
    .then((resp) => { setArrAttrici(resp.data) });


  return (
    <>
      <h1 className="my-5">ATTORI DI HOLLYWOOD</h1>

      {arrAttrici.map((obj) => (
        <Card obj={obj} />

      ))}



    </>
  )
}

export default App
