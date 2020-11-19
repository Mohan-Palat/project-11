import React, { Component } from 'react';
import {getSymbols} from '../api.js';

class ExchangeRate extends Component {

    constructor(props){
        super(props)
    }

 
    render() { 

        console.log("Exchange rate props: ",this.props.exchangeRateResponse);

        return ( 
            <>


            </>
         );
    }


}
 
export default ExchangeRate;