
import axios from "axios";
import { useEffect, useState } from "react";
import { Cartao, Conteudo, Page,} from "../../styles/styledCards";


interface IPokemons{
    name: string;
    id: number;
    sprites: {
      front_default: string
    }
}
interface ICardProps{
  url: string;
  next: string;
}


export const CardPokemon: React.FC<ICardProps> = ({ url }) =>{
  const [pokemon, setPokemon] = useState<IPokemons>();

  
  useEffect(() => {
  const api = axios.create();   
        api.get(url)
        .then(response => {
          setPokemon(response.data)
        }
        ) 
      },[]);
       

return(
  
      <Conteudo>
        <Cartao>
          {pokemon?.name}
          <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
        </Cartao>     
      </Conteudo>
  
)

};