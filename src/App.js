import React, { Component } from 'react';
import Country from './component/Country'
import ExchangeRate from './component/ExchangeRate'
import {getExchangeRate} from './api.js';
class App extends Component {

  render() { 
    return ( 
      <>
      
      <Country exchangeRate={this.exchangeRate}/>
      
      {/* <ExchangeRate /> */}
      </>
     );
  }
  exchangeRate=(base)=>{
    //console.log('the article id to Delete by ',id)
    getExchangeRate(base)
        .then((response)=>{
            console.log(`The base country currency ${base} selected`)
            console.log(response)
            // const newArticlesList=this.props.articles.filter((articles)=>{
            //         return articles._id!==id;
        })
            // this.props.setArticles(newArticlesList);
        .catch((error)=>{
        console.log('API error',error)
        })
    
}
}
 

export default App;
