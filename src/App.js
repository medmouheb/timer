import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor (props)
{
  super(props)
  this.state = { 
      i : 0,
     ss : 0,
     mm : 0,
     hh : 0,
  }
}


  
  
  render() {
    const myReset = () =>
    {
      this.setState({i:0})
    }
    const myStop =()=>
    {
      clearInterval(this.intervalId)
    }
    const myfunction = () =>
    {
      this.intervalId  =setInterval(
        () => {
          this.setState({
            i: this.state.i + 1,
            ss : this.state.i % 60,
            mm : (this.state.i%3600-this.state.i%60)/60,
            hh : (this.state.i-this.state.i%3600)/3600,
          })
        },
        1000
      )
    }
    return (

      <div className="App">
        <div className="timer">
          <div>
            <h1>{this.state.hh}</h1>
            <h4>Hour</h4>
          </div>
          <h1> : </h1>
          <div>
            <h1>{this.state.mm}</h1>
            <h4>Minute</h4>
          </div>
          <h1> : </h1>
          <div>
            <h1>{this.state.ss}</h1>
            <h4>Second</h4>
          </div>
        </div>
      <input type="button" onClick={myfunction} value="Start"/>
      <input type="button" onClick={myStop} value="Pause"/>
      <input type="button" onClick={myReset} value="Reset"/>
      </div>

    );
  }
}

export default App;
