import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const {removeFromDom} = props;
    const deleteTeam = (teamId) => {
        axios.delete('http://localhost:8000/api/teams/' + teamId)
            .then(res => {
                removeFromDom(teamId)
            })
    }

    return (
        <div>
            <h2><Link to="/teams/new">Add Player</Link></h2>
            <h2>All Teams</h2>
			<center>
			<table border="1">
            <tr><th>Player name</th><th>preferred position</th><th>Action</th></tr>
            {props.teams.map((team, idx)=> {
                return 
				<>
                <tr><td key={idx}><Link to ={team._id}>{team.name}</Link></td><td>{team.position}</td><td>
                <button onClick={(e)=>{deleteTeam(team._id)}}>Delete</button>
				</td></tr>
                </>
            })}
            </table>
            </center>
        </div>
    )
}