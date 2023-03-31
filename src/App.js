import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Privacy from './components/footer/Privacy';
import Footer from "./components/Footer";
import { ErrorBoundary } from 'react-error-boundary';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { asideOpen: true, privacyOpen: false };
    this.toggleAside = this.toggleAside.bind(this);
    this.togglePrivacy = this.togglePrivacy.bind(this);
  }

  // This function is called via hamburger icon in navbar, to set visibility on/off for the aside section.
  toggleAside() {
    this.setState(st => ({ asideOpen: !st.asideOpen }));
  }

  // This function is called via the buttons in the footer, or the exit button in the Privacy component
  togglePrivacy() {
    this.setState(st => ({ privacyOpen: !st.privacyOpen }));
  }

  render() {
    return (
      <div className="App" >
        <ErrorBoundary>
          <Navbar toggleAside={this.toggleAside} />
          {this.state.privacyOpen && <Privacy togglePrivacy={this.togglePrivacy} />}
          <Main asideOpen={this.state.asideOpen} />
          <Footer togglePrivacy={this.togglePrivacy} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
