export const setAuthToken = (user) => {
     //jwt token
     const currentUser = {
        email: user.email
    }
    console.log('jwtCurrentUser:', currentUser);

    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        // console.log('data', data)
        localStorage.setItem('food-token', data.token)
    })
}