import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ErrorBoundary } from 'react-error-boundary';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { asideOpen: true };
    this.toggleAside = this.toggleAside.bind(this);
  }

  // This function is called via hamburger icon in navbar, to set visibility on/off for the aside section.
  toggleAside() {
    this.setState(st => ({ asideOpen: !st.asideOpen }));
  }

  render() {
    return (
      <div className="App" >
        <ErrorBoundary>
          <Navbar toggleAside={this.toggleAside} />
          <Main asideOpen={this.state.asideOpen} />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
