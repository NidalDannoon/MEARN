import React from 'react'
const Results =(props) => {
    const {data} = props;
    return (
        <div>
            <h2>Results:</h2>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>Confirm Password: {data.confirmPassword}</p>
        </div>
    );
};
export default Results;