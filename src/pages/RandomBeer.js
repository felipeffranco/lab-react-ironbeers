import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../components/Header"

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/random"


const RandomBeer = () => {
   const [random, setRandom] = useState ([]) // random is the data, set is what the data will be
   useEffect(() =>{
       const apiCall = async () => {
           const res = await axios.get(apiEndpoint)
           setRandom(res.data)        
       }
       apiCall()
   }, [])

       return (
        <div>
            <Header />
            <div className="product">
                <img src={random.image_url} width={100} alt="beerimage"/>
                <div className="nameValue">
                    <h1>{random.name}</h1>
                    <p>{random.attenuation_level}</p>
                </div>
                <div className="taglineDate">
                    <p className="tagline1">{random.tagline}</p>
                    <p className="tagline2">{random.first_brewed}</p>
                </div> 
                <p className="description">{random.description}</p>
                <p className="contributed">{random.contributed_by}</p>
            </div>
        </div>
       )
}



export default RandomBeer;