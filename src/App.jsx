import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./Card"

function App() {

  const attrici = "https://lanciweb.github.io/demo/api/actresses/"
  const [arrAttrici, setArrAttrici] = useState([])

  const attori = "https://lanciweb.github.io/demo/api/actors/"
  const [arrAttori, setArrAttori] = useState([])

  useEffect(() => axiosCall(), [])


  function axiosCall() {
    axios.get(attrici)
      .then((resp) => setArrAttrici(resp.data))
      .catch((err) => alert('errore di caricamento, mi dispiace'));

    axios.get(attori)
      .then((resp) => setArrAttori(resp.data))
      .catch((err) => alert('errore di caricamento, mi dispiace'));
  }

  console.log(arrAttori);
  console.log(arrAttrici);




  const attoriUniti = [...arrAttori, ...arrAttrici]
  console.log(attoriUniti);


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Genera un indice casuale da 0 a i (incluso)
      const j = Math.floor(Math.random() * (i + 1));

      // Scambia l'elemento corrente (i) con l'elemento casuale (j)
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleArray(attoriUniti)
  console.log(attoriUniti);








  return (
    <>
      <h1 className="my-5 container">ATTORI DI HOLLYWOOD</h1>

      <section className="container">
        <div className="row row-cols-4 g-2">
          {attoriUniti.map((obj) => (
            <Card key={obj.id} obj={obj} />
          ))}



        </div>

      </section>




    </>
  )
}

export default App
