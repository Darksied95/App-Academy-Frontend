function isUserValid() {
    const token = localStorage.getItem("token")

    if (!token) return window.location = '/'
}


export default isUserValid