import React from 'react';
const StylComponent = props => {
	const mystyle = {
      color: props.txt,
      backgroundColor: props.bg,
    };
    return (
		<div>
		{ isNaN(props.word) ? <h1 style={mystyle}>The word is: {props.word}</h1> : <h1 style={mystyle}>The Number is: {props.word}</h1>}
		</div>
    )
}
export default StylComponent;