import React from 'react';
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
      <div data-test="app" className="App">
        <div data-test="hello">Hello world</div>
      </div>
    );
  }
}

export default App;
