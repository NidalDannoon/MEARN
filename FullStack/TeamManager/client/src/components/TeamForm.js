import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";
export default ()=> {
    const [name,setName] = useState("");
    const [position,setPosition] = useState("");
    const [errors,setErrors] = useState([]);
    const onSubmitHandler = e=> {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createNewTeam', {
            name,
            position,
        })
        .then(res=>console.log(res)& navigate('/'))
        .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })

    }

    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err,index)=> <p key={index}>{err}</p>)}
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
			    <label>Position</label><br/>
			    <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
            <input type="submit"/>
        </form>
        </div>
    )
}