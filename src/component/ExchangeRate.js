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
      ].toFixed(2);
    }

    return (
      <div className="d-flex justify-content-center" >
        
        <p className="align-self-center">  <br></br>
            <input type="number"
                value={this.props.increments}
                onChange={this.onAmountChange}
                className="form-control form-control-md col-md-10"
            /> 
            
            { baseCurrency }
            
        </p>

        <p className="align-self-center"> {this.props.increments * comparedAmount + " " + this.props.comparedCurrency} </p>
      </div>
    );
  }
  onAmountChange = (e) => {
      
      this.props.onAmountChange(e.target.value);
  }
}

export default ExchangeRate;
