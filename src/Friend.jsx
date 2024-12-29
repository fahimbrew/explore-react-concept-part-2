export default function Friend({friend}){
    // console.log(friend)
    const {name,email,username} = friend;
    return(
        <div style = {{
            border:'1px solid gray',
            padding:'5px',
            fontFamily:'sans-serif',
            margin:'2px',
            borderRadius:'10px'
        }}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Email: {username}</p>
        </div>
    )
}