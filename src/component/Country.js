import React, { Component } from "react";
import { getSymbols } from "../api.js";

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryMap: {},
    };
  }

  componentDidMount() {
    getSymbols()
      .then((response) => {
        console.log("Country codes", response.data.symbols);

        this.setState({
          countryMap: response.data.symbols,
        });
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }

  render() {

    console.log("Country.js: ",this.props.exchangeRateResponse.data.conversion_rates);
    //puts list of countries in array and then maps them into dropdown options

    // let exchangeResponse = this.props.exchangeRateResponse;
    // let countryList = [];
    // if (exchangeResponse.data){
    //     for (key in  exchangeResponse.data.conversion_rates){
    //         countryList.push(key);
    //     }

    //     const filteredFruitList = this.state.countryMap.filter((country) => {
    //         return country.includes(...countryList);
    //       });



    // }
    let countries = [];
    for (var key in this.state.countryMap)
      countries.push(`${key} - ${this.state.countryMap[key]}`);

    const options = countries.map((country) => {
      return (
        <option key={country.slice(0, 3)} value={country.slice(0, 3)}>
          {" "}
          {country}{" "}
        </option>
      );
    });

    return (
      <>
        <label htmlFor="base">From</label>
        <select onChange={this.exchangeRate} id="base">
            <option value="none" selected disabled hidden> 
                USD - United States Dollar 
            </option>
          {options}
        </select>
        <br />
        <label htmlFor="compared">To</label>
        <select onChange={this.changeCompared} id="compared">
            <option value="none" selected disabled hidden> 
                EUR - Euro 
            </option>
          {options}
        </select>
      </>
    );
  }
  exchangeRate = (e) => {
    console.log(e.target.value);
    this.props.exchangeRate(e.target.value);
  };

  changeCompared = (e) => {
    this.props.changeCompared(e.target.value);
  };
}

export default Country;
