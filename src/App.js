import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Footer from './layouts/Footer';
import SideBar from './layouts/SideBar';

function App() {
  return (
    <div className="App" style={{background: "radial-gradient(white, lightslategray)"}}>
      <Navi/>
      <Container className="main">
         <Dashboard/>
      </Container>
      <Footer/>     
    </div>
  );
}

export default App;
