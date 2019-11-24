const createUser = (user, credentials) => {
    return fetch('/api/v1/auth/create-user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applicatiion/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(user)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}
const signin = (user) => {
    return fetch('/api/v1/auth/signin', {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
    })
    .then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

export {signin, createUser}