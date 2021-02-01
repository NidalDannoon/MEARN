import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <div>{props.message.map((item,index) => {let style={backgroundColor:item,width:'50px',height:'50px'}
            return <div key={index} style={style}>{item}</div>})}</div>
        </>
    );
};
    
export default MessageDisplay;
