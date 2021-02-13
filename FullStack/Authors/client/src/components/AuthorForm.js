import React, {useState} from 'react';
import {navigate} from '@reach/router';

export default props => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="button" value="submit"/>
            </form>
            <input type="button" value="cancel" onClick={()=> navigate("/")}/>
        </div>
    )
}