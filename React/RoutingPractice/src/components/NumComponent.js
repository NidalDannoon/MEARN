import React from 'react';
const NumComponent = props => {
    return (
		<div>
		{ isNaN(props.id) ? <h1>The word is: {props.id}</h1> : <h1>The Number is: {props.id}</h1>}
		</div>
    )
}
export default NumComponent;