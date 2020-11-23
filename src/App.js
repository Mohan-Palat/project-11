import React, { Component } from "react";
import Country from "./component/Country";
import ExchangeRate from "./component/ExchangeRate";
import { getExchangeRate } from "./api.js";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeRateResponse: {},
      comparedCurrency: 'EUR',
      increments: 1
     
    };
  }
  //Call API
  componentDidMount() {
    this.exchangeRate('USD')
  
  }
  render() {
    return (
      // https://react-bootstrap.netlify.app/layout/grid/#auto-layout-col-sizing
      <div className="justify-content-center my-5 col-md-8 row mx-auto card card-body">
       
        <h1 className="align-self-center">Reactor's Conversion App</h1>
        {this.state.exchangeRateResponse.data ? 
          <Country
          changeCompared={this.changeCompared}
          exchangeRate={this.exchangeRate}
          exchangeRateResponse={this.state.exchangeRateResponse} 
          comparedCurrency={this.state.comparedCurrency}  
          toggleCurrency={this.toggleCurrency}

        />
          :
          null
        }

       <br></br>
        <ExchangeRate
          comparedCurrency={this.state.comparedCurrency}
          exchangeRateResponse={this.state.exchangeRateResponse}
          onAmountChange={this.handleAmountChange}
          increments={this.state.increments}
        />

        {/* <ExchangeRate /> */}
      </div>
    );
  }
  toggleCurrency=(e)=>{
    let base=this.state.exchangeRateResponse.data.base_code
    let compared=this.state.comparedCurrency
    this.changeCompared(base)
    this.exchangeRate(compared)

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

  handleAmountChange = (value) => {
    console.log("Amount change val: ",value);
    let amount = value;

    console.log("Our increments: ", this.state.increments);

    this.setState({
      increments: amount
    })
}
}

export default App;
