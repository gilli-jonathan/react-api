import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const attrici = "https://lanciweb.github.io/demo/api/actresses/"

  const attori = "https://lanciweb.github.io/demo/api/actresses/"


  axios.get(attrici)
    .then((resp) => {
      console.log(resp.data)
    });






  return (
    <>
      <h1 className="my-5">ATTORI DI HOLLYWOOD</h1>

      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        </div>
      </div>

    </>
  )
}

export default App
