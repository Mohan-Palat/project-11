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
        const filteredCountryMap = response.data.symbols;

        if (this.props.exchangeRateResponse.data.conversion_rates) {
          for (let key in response.data.symbols) {
            if (
              !(key in this.props.exchangeRateResponse.data.conversion_rates)
            ) {
              //console.log("key to delete is", key)
              delete filteredCountryMap[key];
            }
          }
          this.setState({
            countryMap: filteredCountryMap,
          });
        }
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }

  render() {
   
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
        <select
          value={this.props.exchangeRateResponse.data.base_code}
          onChange={this.exchangeRate}
          id="base"
        >
          {options}
        </select>
        <br />
        <label htmlFor="compared">To</label>
        <select
          value={this.props.comparedCurrency}
          onChange={this.changeCompared}
          id="compared"
        >
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
