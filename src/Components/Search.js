import React from 'react';

export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            serie:""
        };
    }
handleInput=(e)=>{
    this.setState({serie:e.target.value})
}
handleSearch=()=>{
    const serie = this.state.serie
    this.props.search(serie)
}

    render(){
        return(
            <div>
                <input className="form-control mr-sm-2" placeholder="Ingrese la serie que desea buscar" onChange={this.handleInput}/>
                <button className="btn aqua-gradient btn-rounded btn-sm my-0" onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}