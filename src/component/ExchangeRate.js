import React, { Component } from "react";


class ExchangeRate extends Component {
 

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
        
        <p> From: 
            <input type="text"
                value={this.props.increments}
                onChange={this.onAmountChange}
            /> 
            
            {baseCurrency}
            
        </p>

        <p> To: {this.props.increments * comparedAmount + " " + this.props.comparedCurrency} </p>
      </div>
    );
  }
  onAmountChange = (e) => {
      
      this.props.onAmountChange(e.target.value);
  }
}

export default ExchangeRate;
