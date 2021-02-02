import React, { useState, useEffect} from "react"
import axios from "axios"

const FetchPokemonButton = props => {
    //Note the second argument is an empty array. We are only 
    const [pokemons, setPokemons]= useState([]);
	const test = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
			.then(response => {
			  return response;
		  }).then(response => {
			 setPokemons(response.data.results);
		  }).catch(err=>{
			  console.log(err);
		});
	}

    return (
        <div>
            <button onClick={test}>Click me!</button>
            {   pokemons.map( (item, index)=>
            <p key={index}>{item.name}</p>
            )}
        </div>
    )

}

export default FetchPokemonButton;