import axios from 'axios'

const getSymbols = ()=> {
    axios.default.baseURL = process.env.REACT_APP_BASE_URL_SYMBOLS
    return axios.get(`http://data.fixer.io/api/symbols?access_key=${process.env.REACT_APP_API_KEY_SYMBOLS}`)
}

const getExchangeRate= (base)=> {
    axios.default.baseURL = process.env.REACT_APP_BASE_URL_EXCHANGE
    return axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY_EXCHANGE}/latest/${base}`)
}

export { getSymbols, getExchangeRate };