import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPostContainer from './containers/AllPostContainer';
import HOC from './components/HOC';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>
          Hello
        </h1>
        <PostForm />
        <AllPostContainer />
        <HOC />
        
      </div>
    );
  }
}

export default App;
