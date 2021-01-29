import logo from './logo.svg';
import './App.css';
import React from 'react';
import { AboutUsCompoenet } from './aboutus';
import { ContentsComponent } from './contents';
import { NavComponent } from './Navbar';
import { SectionComponent } from './section';
import { Button, Container } from 'react-bootstrap';
import youtube from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      videos: [],
      // currentState: "not-panic",

      // Note: think carefully before initializing
      // state based on props!
      // someInitialValue: this.props.initialValue
    }
  }

  handleSubmit = async () => {
    const response = await youtube.get('/search', {
        params: {
            q: 'merge'
        }
    })
    console.log('Hey There !! From Axios Response');
      console.log(response.data.items);
    this.setState({
      
        videos: response.data.items
    })
};

  render() {
  return (
    <Router>
    <div className="App">
      <NavComponent></NavComponent>
      <Container fluid>
      <Switch>
          <Route path="/about">
            <AboutUsCompoenet />
          </Route>
          <Route path="/content">
            <ContentsComponent />
          </Route>
          <Route path="/">
          <SectionComponent></SectionComponent>
          </Route>
        </Switch>
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {this.state.videos.map(el => <p value={el} key={el.etag}> {el.snippet.title} </p>)}
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button></Button>
        <Button variant="primary" onClick={this.handleSubmit}>Primary</Button>{' '}
      </header>
    </div>
    </Router>
  );
  } 
}

export default App;
