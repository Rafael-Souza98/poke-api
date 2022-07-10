

import { Button,  TextField } from "@mui/material";
import  {  useCallback, useEffect, useState } from "react";
import { api } from "../services/api/ApiConfig";
import { ButtonSearch } from "../shared/components/buttons";
import { CardPokemon } from "../shared/components/Cards";
import { Page, SpanButton } from "../styles/styledCards";
import { Position } from "../styles/styleSearchBar";


interface Response{
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
    const [response, setResponse] = useState<Response>();

    const handlePokemonsInState = useCallback(() => {
        api.get(response?.next!!) .then(res =>{
            setResponse(res.data)
            setPokemon([...pokemon!!, ...res.data.results])
        })

    },[pokemon, response?.next]);

    useEffect(() => {
       api.get('/pokemon')
       .then(res => {
        setPokemon(res.data.results)
        setResponse(res.data)
    })
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
                    <CardPokemon key={poke.name} url={poke.url}/> 
                </section>
                        )}     
        </Page>

            <SpanButton>
                 <Button variant="contained" color="success" onClick={handlePokemonsInState}>Mais...</Button>
            </SpanButton>
     </div> 
    )
}




