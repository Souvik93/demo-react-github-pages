import logo from './logo.svg';
import './App.css';
import {NavComponent} from './Navbar';
import { SectionComponent } from './section';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <Container fluid>
        <SectionComponent></SectionComponent>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Button variant="primary">Primary</Button>{' '}
      </header>
      </Container>
    </div>
  );
}

export default App;
