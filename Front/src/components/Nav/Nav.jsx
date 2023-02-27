import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";


export default function Nav(props){
    return( 
        <>
            <SearchBar 
                onSearch={props.onSearch} 
                random={props.random}
                logOut={props.logOut}/>
                      
        </>
    )
}