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

            <select id="cars" name="cars">
                
            {options}
            </select>

            <p>dropdown menu for based country</p>
            <p>dropdown menu for Compared country</p>
            </>
         );
    }
}
 
export default Country;