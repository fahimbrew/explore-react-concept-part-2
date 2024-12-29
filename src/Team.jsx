import { useState } from "react" // hook - useState

export default function Team(){

    const [team,setTeam] = useState(11);
    const handleAdd = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam);

    }
    
    const handleRemove = () =>{
        const newTeam = team - 1;
        if(newTeam>=0){
            setTeam(newTeam);
        }

    }

    const teamStyle = {
        padding:'12px',
        border: '1px solid gray',
        borderRadius:'10px',
        marginBottom:'10px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}