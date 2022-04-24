const localAPI = 'http://localhost:1337'
const onlineAPI = 'https://mo-trading-backend.herokuapp.com'

const theMode = () => {
    if (process.env.NODE_ENV == 'development') {
        return localAPI
    } else {
        return onlineAPI
    }
}

export default theMode()
