
import {  Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";




export const AppRoutes = () =>{
    
    return(
            <Routes>
                <Route path="/pokemon" element={<Dashboard/>}/>
                <Route path="*" element={<Navigate to='/pokemon'/>}/>
            </Routes>
        
    )
};