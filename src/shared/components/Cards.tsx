
import axios from "axios";
import { useEffect, useState } from "react";

import { Cartao, Conteudo, Descricao, HabilidadePokemon, Lista, Nome } from "../../styles/styledCards";


interface IPokemons{
    name: string;
    url: string; 
  
}


function CardPokemon(data: IPokemons){
  const [pokemon, setPokemon] = useState<IPokemons[]>();

  
  
  useEffect(() => {
  const api = axios.create();   
        api.get(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
        .then(response => {
          setPokemon(response.data.results)
        }
        ) 
      },[]);
       

return (
<Lista>
    {pokemon?.map((pokemon) =>
      (<Conteudo>
        <Cartao >
          <Nome key={pokemon.name}>{pokemon.name}</Nome>
          <Descricao>{pokemon.url} </Descricao>
        </Cartao>
            
    </Conteudo>))
    } 
</Lista>
)   
}
export  default CardPokemon;

       
    