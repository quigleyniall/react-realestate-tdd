import React from 'react';
import SearchBar from './components/SearchBar';
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
      <div data-test="app" className="row">
        <div className="col-md-12">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
