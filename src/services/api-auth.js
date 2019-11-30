
const createUser = (user, credentials) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch('/api/v1/auth/create-user', {
        method: 'POST',
        mode:'cors',
        cache: 'default',
        body: JSON.stringify(user), // formData
        headers: headers,
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}
const signin = (user) => {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return fetch('/api/v1/auth/signin', {
        method: 'POST',
        mode:'cors',
        cache: 'default',
        body: JSON.stringify(user), // formData
        headers: headers,
    })
    .then((response) => {
        return response.json()
    })
    .catch((err) => console.log(err))
}

export {signin, createUser}