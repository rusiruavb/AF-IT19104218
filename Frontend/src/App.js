import React, { Component } from 'react';
import './App.css';
import PageRoutes from './routes/pageRoutes';

class App extends Component {
  render() {
    return (
      <div>
        <PageRoutes />
      </div>
    )
  }
}

export default App;