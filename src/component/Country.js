import React, { Component } from 'react';
import {getSymbols} from '../api.js';

class Country extends Component {

    constructor(props){
        super(props);

        this.state = {
            countryMap: ({})
        }
    }

    componentDidMount() {
        getSymbols()
          .then((response) => {
            console.log('Country codes', response.data.symbols);

            this.setState({
                countryMap: response.data.symbols
            })
    
          })
          .catch((error) => {
            console.log('API ERROR:', error);
          });
    };
 
    render() { 
        //puts list of countries in array and then maps them into dropdown options
        let countries = [];
        for (var key in this.state.countryMap) 
            countries.push( `${key} - ${this.state.countryMap[key]}` );
        
        const options = countries.map(country => {
            return <option key={country.slice(0, 3)} value={country.slice(0, 3)}> {country} </option>;
          });
    
        

        return ( 
            <>
            <label htmlFor="base">From</label>
            <select onChange={this.exchangeRate} id="base">
                {options}
            </select><br/>
            <label htmlFor="compared">To</label>
            <select onChange={this.changeCompared} id="compared">
                {options}
            </select>
            </>
         );
    }
    exchangeRate =(e)=>{
        console.log(e.target.value)
        this.props.exchangeRate(e.target.value)
    }

    changeCompared =(e)=>{
        this.props.changeCompared(e.target.value)
    }

}
 
export default Country;