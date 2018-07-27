import React, { Component } from 'react';
import AllPostContainer from './containers/AllPostContainer';
import HOC from './components/HOC';
import PostFormContainer from './containers/PostFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hello
        </h1>
        <PostFormContainer />
        <AllPostContainer />
        <HOC />
        
      </div>
    );
  }
}

export default App;
