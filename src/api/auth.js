export const setAuthToken = (user) =>{
    
    const currentUser = {
        email: user.email
    }

    //get jwt token from server
    fetch(`https://akl-lawyer-service-server.vercel.app/jwt`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('lawyer-token', data.token);
    })
}