import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';
import './css/App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Justin',
      age: 25
    }
  }

  render(){
    return (
      (<div className={'container'} >
        
      <Counter status="auto"/>
      </div>)
    )
  }
}

export default App;
// ReactDOM.render(<App />, document.getElementById('app'))
