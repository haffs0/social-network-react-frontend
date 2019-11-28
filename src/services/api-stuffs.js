const baseUrl = 'http://localhost:3003' 

const createGif = (post, credentials) => {
    return fetch('/api/v1/gifs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(post)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const createArticle = (post, credentials) => {
    return fetch('/api/v1/articles', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applicatiion/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(post)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const updateArticle = (params, credentials, post) => {
    return fetch(`/api/v1/articles/${params.articleId}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(post)
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

const deleteArticle = (params, credentials) => {
    return fetch(`/api/v1/articles/${params.articleId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.token
        }
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

const deleteGif = (params, credentials) => {
    return fetch(`/api/v1/gifs/${params.gifId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.token
        }
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}


const createArticleComment = (params, credentials, post) => {
    return fetch(`/api/v1/articles/${params.articleId}/comment`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applicatiion/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(post)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const createGifComment = (params, credentials, post) => {
    return fetch(`/api/v1/gifs/${params.gifId}/comment`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applicatiion/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(post)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const feeds = (credentials) => {
    return fetch('/api/v1/feeds', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applicatiion/json',
            'Authorization': 'Bearer ' + credentials.token
        }
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const singleArticle = (params, credentials) => {
    return fetch(`/api/v1/articles/${params.articleId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applicatiion/json',
            'Authorization': 'Bearer ' + credentials.token
        }
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const singleGif = (params, credentials) => {
    return fetch(`/api/v1/gifs/${params.gifId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applicatiion/json',
            'Authorization': 'Bearer ' + credentials.token
        }
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const category = (tag, credentials) => {
    return fetch(`/api/v1/category`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applicatiion/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(tag)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const flag = (params, credentials, tableName) => {
    return fetch(`/api/v1/flag/${params.id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(tableName)
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

const deleteFlag = (params, credentials, tableName) => {
    return fetch(`/api/v1/flag/${params.id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(tableName)
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

const signout = (credentials) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch(`${baseUrl}/api/v1/logout`, {
        method: 'GET',
        mode: 'cors',
        headers: headers,
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

export { 
    createGif,
    createArticle, 
    createArticleComment, 
    createGifComment, 
    category, 
    deleteArticle, 
    deleteFlag,
    deleteGif,
    updateArticle,
    flag,
    signout,
    singleArticle,
    singleGif,
    feeds,
}