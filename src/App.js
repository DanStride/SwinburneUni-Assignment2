import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { asideOpen: true };
    this.toggleAside = this.toggleAside.bind(this);
  }
  toggleAside() {
    this.setState(st => ({ asideOpen: !st.asideOpen }));
  }
  render() {

    return (
      <div className="App" >
        <Navbar toggleAside={this.toggleAside}/>
        <Main asideOpen={this.state.asideOpen}/>
        <Footer />
      </div>
    );
  }
}

export default App;
