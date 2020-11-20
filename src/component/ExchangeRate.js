import React, { Component } from "react";
import { getSymbols } from "../api.js";

class ExchangeRate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   // console.log("Exchange rate props: ", this.props.exchangeRateResponse);
    //console.log("Compared country", this.props.comparedCurrency)
    let baseCurrency = "No Currency Selected";
    let comparedAmount = 0.0;
    if (this.props.exchangeRateResponse.data) {
      baseCurrency = this.props.exchangeRateResponse.data.base_code;
      comparedAmount = this.props.exchangeRateResponse.data.conversion_rates[
        this.props.comparedCurrency
      ];
    }

    return (
      <div>
        <p> From: {baseCurrency + " 1"}</p>
        <p> To: {this.props.comparedCurrency + "  " + comparedAmount} </p>
      </div>
    );
  }
}

export default ExchangeRate;
