import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<{}, { something: string }> {
  constructor(props) {
    super(props);
    this.state = {
      something: 'hello'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
