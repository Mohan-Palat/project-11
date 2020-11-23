import React from "react";


function ExchangeRate(props){
 
   // console.log("Exchange rate props: ", props.exchangeRateResponse);
    //console.log("Compared country", props.comparedCurrency)
    let baseCurrency = "No Currency Selected";
    let comparedAmount = 0.0;
    const onAmountChange = (e) => { props.onAmountChange(e.target.value); }
    if (props.exchangeRateResponse.data) {
      baseCurrency = props.exchangeRateResponse.data.base_code;
      comparedAmount = (props.exchangeRateResponse.data.conversion_rates)[
        props.comparedCurrency
      ];
      
    }

    return (
      <div className="d-flex justify-content-center" >
        
        <p> 
            <input type="number"
                value={props.increments}
                onChange={onAmountChange}
                className="form-control form-comtrol-md col-md-10"
            /> 
            
            {/* { baseCurrency }
             */}
        </p>

        <p className="align-self-center">  { `${baseCurrency} =` } {(props.increments * comparedAmount).toFixed(2) + " " + props.comparedCurrency} </p>
      </div>
    );
  
  
}

export default ExchangeRate;
