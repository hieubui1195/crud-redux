import React, { Component } from 'react';
import AllPostContainer from './containers/AllPostContainer';
import HOC from './components/HOC';
import PostFormContainer from './containers/PostFormContainer';
import Context from './components/ThemedButton';

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
        <Context />
      </div>
    );
  }
}

export default App;
