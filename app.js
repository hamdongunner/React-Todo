// import UI lib to be used
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// Define a statuful components
class Todos extends Component {

  // the constructor is used to set the intial state
  constructor(){
    super()

    // define the intial state
    this.state = {
      todos: [],
      inputValue:'hello '
    }
    onkeyup = this.onkeyup.bind(this);
  }

  // when the user is writing to the input text, upate the inputValue key in the state
  oninputchange (event){
    this.setState({
      inputValue: event.target.value
    })
  }

  onkeyup (event){
    let todos = this.state.todos;
    if (event.key === 'Enter') {
      todos.push({
        text: this.state.inputValue,
        status: 'UNCHECKED'
      })
      this.setState({
        todos: todos,
        inputValue: ''
      })

    }
  }

  render(){
    return (
      <div className="container">
        <input type="text" value={this.state.inputValue} onKeyUp={this.onkeyup.bind(this)}
        onChange={this.oninputchange.bind(this)}/>
        {
          this.state.todos.map((item, i)=>{
            return <div className="item" key={i}>{item.text}</div>
          })
        }

      </div>
    )
  }
}

// Define a statless components
function App() {
  return (
    <Todos />
  )
}

// Display content
ReactDOM.render(<App/>, document.getElementById('root'))
