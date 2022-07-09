

import { dividerClasses, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, {  useCallback, useEffect, useState } from "react";
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
   
};


export const Dashboard = () =>{
    const [pokemon, setPokemon] = useState<Results[]>();
    const [response, setResponse] = useState<IResponse>();

    const handlePokemonsInState = useCallback((url: string) => {
        api.get(url).then(res =>{
            setResponse(res.data)
            !!pokemon
            ?setResponse({...pokemon, ...res.data.results})
            : setResponse(res.data.results)
        })
    },[pokemon]);

    const handleNewData = useCallback(() => {
        response?.next && handlePokemonsInState(response?.next)
    },[handlePokemonsInState, response?.next]);

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
            <span> {response?.count} </span>       
        </Position>    
        
                <Page>
                {pokemon?.map((poke) =>
                <section>
                    <CardPokemon key={poke.name} url={poke.url}/> 
                </section>
                        )}
                <button onClick={handleNewData}>... Mais </button>        
                </Page>
            </div> 
    )
}




