import { Link } from "react-router-dom";

import allBeers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"

const HomePage = () => {
    return(
        <nav id="home">
            <Link to="/AllBeers">
                <img src={allBeers} alt="beers" />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit am liber, consectetur adipiscing elit. Lorem ipsum dolor sit am liber, consect.</p> 
            </Link>
            <Link to="/random-beer">
                <img src={randomBeer} alt="random beers" />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit am liber, consectetur adipiscing elit. Lorem ipsum dolor sit am liber, consect.</p> 
            </Link>
            <Link to="/NewBeer">
                <img src={newBeer} alt="new beers" />
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit am liber, consectetur adipiscing elit. Lorem ipsum dolor sit am liber, consect.</p> 
            </Link>
        </nav>
    )
}

export default HomePage;