import React, { Component } from "react";
import Country from "./component/Country";
import ExchangeRate from "./component/ExchangeRate";
import { getExchangeRate } from "./api.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeRateResponse: {},
      comparedCurrency: "EUR",
      increments: 1,
    };
  }
  //Call API
  componentDidMount() {
    this.exchangeRate("USD");
  }
  render() {
    return (
      <>
        <h1 class="ui center aligned header">The Reactors Exchange</h1>
        <a href='https://react.semantic-ui.com/' style={{fontSize: '10px'}}>Powered by: Semantic React UI</a>

        {this.state.exchangeRateResponse.data ? (
          <Country
            changeCompared={this.changeCompared}
            exchangeRate={this.exchangeRate}
            exchangeRateResponse={this.state.exchangeRateResponse}
            comparedCurrency={this.state.comparedCurrency}
            toggleCurrency={this.toggleCurrency}
          />
        ) : null}

        <ExchangeRate
          comparedCurrency={this.state.comparedCurrency}
          exchangeRateResponse={this.state.exchangeRateResponse}
          onAmountChange={this.handleAmountChange}
          increments={this.state.increments}
        />

        {/* <ExchangeRate /> */}
        
      </>
    );
  }
  toggleCurrency = (e) => {
    let base = this.state.exchangeRateResponse.data.base_code;
    let compared = this.state.comparedCurrency;
    this.changeCompared(base);
    this.exchangeRate(compared);
  };
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

  handleAmountChange = (value) => {
    console.log("Amount change val: ", value);
    let amount = value;

    console.log("Our increments: ", this.state.increments);

    this.setState({
      increments: amount,
    });
  };
}

export default App;
