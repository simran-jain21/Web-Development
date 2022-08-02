import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavbarComp from './Components/NavbarComp';
import HomeComp from './Components/HomeComp';
import AccountComp from './Components/AccountComp';
import ServicesComp from './Components/ServicesComp';
import AboutUsComp from './Components/AboutUsComp';
import ContactComp from './Components/ContactComp';
import ContactDetailsComp from './Components/ContactDetailsComp';


function App() {
  return (
    <>
      <Router>
        <NavbarComp/>
        <Container>
          <Routes>
              <Route path="/" element={<HomeComp/>}/>
              <Route path="/account" element={<AccountComp/>}/>
              <Route path="/services" element={<ServicesComp/>}/>
              <Route path="/about-us" element={<AboutUsComp/>}/>
              <Route path="/contact" element={<ContactComp/>}/>
              <Route path='/contact/:id' element={<ContactDetailsComp/>}/>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
