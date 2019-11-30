 
const createGif = (post, credentials) => {
    const formData = new FormData();
    formData.append('title', post.title)
    formData.append('userId', post.userId)
    formData.append('image', post.attachment);
    const headers = new Headers();
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch('/api/v1/gifs', {
        method: 'POST',
        mode:'cors',
        headers: headers,
        body: formData, // formData
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const createArticle = (post, credentials) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch('/api/v1/articles', {
        method: 'POST',
        mode:'cors',
        cache: 'default',
        body: JSON.stringify(post), // formData
        headers: headers,
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const updateArticle = (params, credentials, post) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch(`/api/v1/articles/${params}`, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify(post),
        headers: headers,
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

const deleteArticle = (params, credentials) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch(`/api/v1/articles/${params}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: headers,
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

const deleteGif = (params, credentials) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch(`/api/v1/gifs/${params}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: headers,
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
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch('/api/v1/feeds', {
        method: 'GET',
        mode: 'cors',
        headers: headers,
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const singleArticle = (params, credentials) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer${credentials}`);
    return fetch(`/api/v1/articles/${params}`, {
        method: 'GET',
        mode: 'cors',
        headers: headers,
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
    return fetch('/api/v1/logout', {
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