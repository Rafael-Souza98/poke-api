import { TextField } from "@mui/material";
import { Position } from "../../../styles/styleSearchBar"
import { ButtonSearch } from "../buttons";

export const SearchBar: React.FC = () =>{
    
    return(
        <Position>
            <TextField id="outlined-basic" label="Pokemon" variant="outlined" size="small" color="success"/>
            <ButtonSearch />
        </Position>    
    );
};