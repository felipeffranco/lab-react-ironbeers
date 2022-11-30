import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../components/Header"
import { Link } from 'react-router-dom'

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

const AllBeers = () => {
    const [beers, setBeers] = useState ([]) // beers is the data, set is what the data will be

    useEffect(() =>{
        const apiCall = async () => {
            const res = await axios.get(apiEndpoint)
            setBeers(res.data)            
        }
        apiCall()
    }, [])
    const oneBeer = beers.map((beer) => { 
        return (
            <div key={beer._id} className="listBeer">
                <Link to={`/beers/${beer._id}`} >
                    <img src={beer.image_url} alt="Beer" />
                    <div className="data">
                        <h1>{beer.name}</h1>
                        <h2>{beer.tagline}</h2>
                        <p><b>Created by:</b> {beer.contributed_by}</p>
                    </div>
                </Link>
            </div>
        )
    })
    return(
        <div>
            <Header></Header>
            {oneBeer}     
        </div>
    )
}

export default AllBeers;