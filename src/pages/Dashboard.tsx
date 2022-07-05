


import axios from "axios";
import { useEffect, useState } from "react";

import CardPokemon from "../shared/components/Cards";
import { SearchBar } from "../shared/components/searchbar/SearchBar"

interface IResponse{
    count: number;
    next: string;
    previous: string;
    results: Results[];
};

interface Results{
    name: string;
    url: string;
 
    
    
}


export const Dashboard = () =>{
    const [pokemon, setPokemon] = useState<Results[]>();
 
    useEffect(() => {
      const api = axios.create ()
       api.get('https://pokeapi.co/api/v2/pokemon')
       .then(response => setPokemon(response.data.results))
    },[])

    return(
            <div>
                <SearchBar/>
                {pokemon?.map((pokes) => 
                
                (<CardPokemon 
                key={pokes.name}
                name={pokes.name}
                url={pokes.url}
                
                />))};
            </div> 
    )
}




