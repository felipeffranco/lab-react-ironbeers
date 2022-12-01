import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "../components/Header.js"

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/"

function SingleBeer() {
   const { beerId } = useParams()
   const [beer, setBeer] = useState({})

   useEffect(() =>{
      const apiCall = async () => {
         const res = await axios.get((apiEndpoint + beerId))
         setBeer(res.data)
      }
      apiCall()
   }, [])


   return (
        <div>
            <Header />
            <div className="product">
                <img src={beer.image_url} width={100} alt="beerimage"/>
                <div className="nameValue">
                    <h1>{beer.name}</h1>
                    <p>{beer.attenuation_level}</p>
                </div>
                <div className="taglineDate">
                    <p className="tagline1">{beer.tagline}</p>
                    <p className="tagline2">{beer.first_brewed}</p>
                </div> 
                <p className="description">{beer.description}</p>
                <p className="contributed">{beer.contributed_by}</p>
            </div>
        </div>
   )
}

export default SingleBeer;