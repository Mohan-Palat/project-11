import React, { Component } from "react";
import { getSymbols } from "../api.js";
import CountryFlag from './CountryFlag'

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryMap: {},
      baseFlag: "https://www.countryflags.io/US/shiny/64.png",
      compareFlag: "https://www.countryflags.io/EU/shiny/64.png"

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
        <div>
            <CountryFlag flag={this.state.baseFlag}/>
            <label htmlFor="base">From</label>
        
            <select
                value={this.props.exchangeRateResponse.data.base_code}
                onChange={this.handleSelect}
                id="base"
                >
                {options}
            </select>
        </div>
        <br />
        <div>
            <CountryFlag flag={this.state.compareFlag}/>
            <label htmlFor="compared">To</label>
            <select
                value={this.props.comparedCurrency}
                onChange={this.handleSelect}
                id="compared"
                >
                {options}
            </select>
        </div>
      </>
    );
  }

  handleSelect = (e) => {
    this.getCountryFlag(e);

    if (e.target.id === 'base')
        this.exchangeRate(e);
    else this.changeCompared(e);
  }

  exchangeRate = (e) => {
    console.log(e.target.value);
    this.props.exchangeRate(e.target.value);
  };

  changeCompared = (e) => {
    this.props.changeCompared(e.target.value);
  };

  getCountryFlag = (e) => {
    let currency = e.target.value;
    let country = currency.slice(0,2);

    console.log(country);

    let flag = `https://www.countryflags.io/${country}/shiny/64.png`;

    if (e.target.id==='base'){
        this.setState({
            baseFlag: flag,
        });
    }
    else {
        this.setState({
            compareFlag: flag,
        });
    }
  };
}

export default Country;
