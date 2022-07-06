

import { TextField } from "@mui/material";
import React, {  useEffect, useState } from "react";
import { api } from "../services/api/ApiConfig";
import { ButtonSearch } from "../shared/components/buttons";
import { CardPokemon } from "../shared/components/Cards";
import { Next } from "../styles/styledButtonNext";
import { Page } from "../styles/styledCards";
import { Position } from "../styles/styleSearchBar";


interface IResponse{
    count: number;
    next: string;
    previous: string;
    results: Results[];
};

interface Results{
    name: string;
    url: string;  
    next: string;
};


export const Dashboard = () =>{
    const [pokemon, setPokemon] = useState<Results[]>();
    
    useEffect(() => {
       api.get('/pokemon')
       .then(response => setPokemon(response.data.results))
    },[]);

    return(
        
    <div>         
         <Position>
            <TextField 
            
            id="outlined-basic" 
            label="Pokemon" 
            variant="outlined" 
            size="small" 
            color="success"
           />
            <ButtonSearch />
        </Position>    

                <Page>
                {pokemon?.map((poke) =>
                <section>
                    <CardPokemon
                        key={poke.name}
                        url={poke.url}
                        next={poke.next} /> 
                </section>
                        )}
                        
                </Page>
            </div> 
    )
}




