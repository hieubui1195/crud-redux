import React from 'react';

const ThemeContext = React.createContext('light')

const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
}

class Context extends React.Component {
  state = {theme: 'light'}
  toggleTheme = () => {
    this.setState(({theme}) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }))
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button onClick={this.toggleTheme}>toggle theme</button>
        <ThemeContext.Consumer>
          {theme => <div style={styles[theme]}>{theme}</div>}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    )
  }
}

export default Context;

// ReactDOM.render(<App />, document.getElementById('root'))