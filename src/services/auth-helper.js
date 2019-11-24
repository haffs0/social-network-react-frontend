//save credentials on successful signin

const authenticate = (jwt, cb) => {
    if(typeof window !== "undefined") {
        sessionStorage.setItem('jwt',JSON.stringify(jwt))
    }
    cb()
}
    
const isAuthenticated = () => {
    if (typeof window == "undefined")
        return false

    if (sessionStorage.getItem('jwt')) {
        return JSON.parse(sessionStorage.getItem('jwt'))
    }else {
        return false;
    }
}

const signout = (cb) => {
    if(typeof window !== "undefined")
        sessionStorage.removeItem('jwt')
    cb()
    signout().then((data) => {
        document.cookie = "t=; expires=Thu, UTC; path=/;"
    })
}

export { authenticate, isAuthenticated, signout}
