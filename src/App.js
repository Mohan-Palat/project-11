import React, { Component } from "react";
import Country from "./component/Country";
import ExchangeRate from "./component/ExchangeRate";
import { getExchangeRate } from "./api.js";
import CountryFlag from './component/CountryFlag'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeRateResponse: {},
      comparedCurrency: 'EUR',
     
    };
  }
  //Call API
  componentDidMount() {
    this.exchangeRate('USD')
  
  }
  render() {
    return (
      <>
       

        {this.state.exchangeRateResponse.data ? 
          <Country
          changeCompared={this.changeCompared}
          exchangeRate={this.exchangeRate}
          exchangeRateResponse={this.state.exchangeRateResponse} 
          comparedCurrency={this.state.comparedCurrency}  

        />
          :
          null
        }

       
        <ExchangeRate
          comparedCurrency={this.state.comparedCurrency}
          exchangeRateResponse={this.state.exchangeRateResponse}
        />

        {/* <ExchangeRate /> */}
      </>
    );
  }
  //UI
  exchangeRate = (base) => {
    getExchangeRate(base)
      .then((response) => {
        console.log(`The base country currency ${base} selected`);
        console.log(response);

        this.setState({
          exchangeRateResponse: response,
        });
      })
      .catch((error) => {
        console.log("API error", error);
      });
  };
  changeCompared = (compared) => {
    this.setState({
      comparedCurrency: compared,
    });
  };
}

export default App;
