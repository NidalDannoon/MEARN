import React, {useState,useEffect} from 'react';
import {Link} from "@reach/router";

const People = (props) => {
    const [person, setPerson] = useState({});
	const [world, setWorld] = useState("");
    const [message, setMessage] = useState("These aren't the droids you're looking for");
    useEffect(() => {
        fetch("https://swapi.dev/api/people/" + props.id)
            .then(response => response.json())
            .then(response => {
                setPerson(response);
				setWorld(response.homeworld);
            })
            .catch(err => {
            console.log(err)
        })
    }, [props.id])
    return (

        <>
            {person.name !== undefined ?
                <>
                    <h1>Name: {person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
					<Link to={`/planets/${world.slice(-2)}`}>Home World</Link>
                </> : <h2>{message}</h2>}
        </>
    );
}
export default People;