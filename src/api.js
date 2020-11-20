import axios from 'axios'

const getSymbols = ()=> {
   
    return axios.get(`http://data.fixer.io/api/symbols?access_key=${process.env.REACT_APP_API_KEY_SYMBOLS}`)
}

const getExchangeRate= (base)=> {
  
    return axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY_EXCHANGE}/latest/${base}`)
}

export { getSymbols, getExchangeRate};