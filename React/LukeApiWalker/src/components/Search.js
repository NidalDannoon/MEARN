import {useState} from "react";
import { navigate } from '@reach/router'

const Search =(props)=> {
    const [type, setType] = useState("people");
    const [id, setId] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        type === "people"?navigate("/people/"+id):navigate("/planets/"+id);
    }
    return(
        <>
            <form onSubmit={(e) => submitHandler(e)}>
                <select name={"field"} onChange={(e) => setType(e.target.value)}>
                    <option value = {"people"}>People</option>
                    <option value = {"planets"}>Planets</option>
                </select>
                <input type = "number" name = "id"  onChange={(e)=>setId(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </>
    );
}
export default Search;