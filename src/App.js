import './App.css';

import React from 'react';
import Search from './Components/Search';
import ShowSerie from './Components/ShowSerie';



export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      series:""
    }
  }
  search = (valor) => {
    console.log(valor)
    fetch(`http://localhost:4500/${valor}`)
      .then((res) => { return res.json() })
      .then((json) => {
        console.log("Serie Buscada:", json)
        
        this.setState({series:json})
      })
  }
  render() {
    if(this.state.series === ""){
      return (
        <Search search={this.search}/>
      )
    }else{
      return (
        <div>
          <Search search={this.search} />
          <ShowSerie series={this.state.series || []}/>
        </div>
      )
    }
  }
}

