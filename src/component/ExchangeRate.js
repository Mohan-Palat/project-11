import React from "react";
import { Flag } from "semantic-ui-react";

function ExchangeRate(props) {
  // console.log("Exchange rate props: ", props.exchangeRateResponse);
  //console.log("Compared country", props.comparedCurrency)
  let baseCurrency = "No Currency Selected";
  let comparedAmount = 0.0;
  let twoCharCountryBase = "";
  let twoCharCountryCom = "";
  const onAmountChange = (e) => {
    props.onAmountChange(e.target.value);
  };

  if (props.exchangeRateResponse.data) {
    twoCharCountryBase = props.exchangeRateResponse.data.base_code.substring(0, 2).toLowerCase();

    twoCharCountryCom = props.comparedCurrency.substring(0, 2).toLowerCase();
    console.log(twoCharCountryBase);
    baseCurrency = props.exchangeRateResponse.data.base_code;
    comparedAmount =
      props.exchangeRateResponse.data.conversion_rates[props.comparedCurrency];
  }

  return (
    <div class="ui center aligned header">
      <div class="ui divider" ></div>

      <label>From:</label>

      {baseCurrency}
      <Flag name={twoCharCountryBase} />
      <input
        type="number"
        style={{ borderRadius: "10px" }}
        value={props.increments}
        onChange={onAmountChange}
      />
      <div>
          
      </div>

      <label>To:</label>
      {props.comparedCurrency}
      <Flag name={twoCharCountryCom} />
      {}
      <input
        style={{ border: "0px" }}
        value={
          (props.increments * comparedAmount).toFixed(2)}
      />
    </div>
  );
}

export default ExchangeRate;
