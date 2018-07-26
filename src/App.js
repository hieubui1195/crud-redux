import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPostContainer from './containers/AllPostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hello
        </h1>
        <PostForm />
        <AllPostContainer />
      </div>
    );
  }
}

export default App;
