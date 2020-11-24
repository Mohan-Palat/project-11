import React from "react";


function ExchangeRate(props){
 
   // console.log("Exchange rate props: ", props.exchangeRateResponse);
    //console.log("Compared country", props.comparedCurrency)
    let baseCurrency = "No Currency Selected";
    let comparedAmount = 0.0;
    const onAmountChange = (e) => { props.onAmountChange(e.target.value); }
    if (props.exchangeRateResponse.data) {
      baseCurrency = props.exchangeRateResponse.data.base_code;
      comparedAmount = props.exchangeRateResponse.data.conversion_rates[
        props.comparedCurrency
      ];
    }

    return (
      <div class="country-selector">
        
        <p> From: 
            <input type="text"
                value={props.increments}
                onChange={onAmountChange}
            /> 
            
            {baseCurrency}
            
        </p>
        <div class="divider"></div>

        <p> To: {(props.increments * comparedAmount).toFixed(3) + " " + props.comparedCurrency} </p>
      </div>
    );
  
  
}

export default ExchangeRate;
