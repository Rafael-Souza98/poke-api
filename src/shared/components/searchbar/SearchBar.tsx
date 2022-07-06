import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";
import { api } from "../../../services/api/ApiConfig";
import { Position } from "../../../styles/styleSearchBar"
import { ButtonSearch } from "../buttons";

interface ISearchProps{
    value: string;
    onChange: () => void;
}


export const SearchBar: React.FC = () =>{
    
    
     
    return(
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
    );
};


