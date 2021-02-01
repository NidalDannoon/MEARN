import React, {useState} from 'react';

const Tab = (props) => {
    const[display,setDisplay] = useState(0);
    const onClickHandler = (e,i) => {
        setDisplay(i);
        console.log(i)
    }
    return (
        <>
            {props.content.map((content, i) =>
				<input type='button' value="Tab" key = {i} onClick={(e) => onClickHandler(e, i)} />
            )}
            { display===1?
            <p>{props.content[0]}</p>
            :display ===2?
            <p>{props.content[1]}</p>
            :
            <p>{props.content[2]}</p>
        }
        </>
    )
}

export default Tab