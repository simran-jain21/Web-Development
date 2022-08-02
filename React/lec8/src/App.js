
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Home from './Components/Home' ;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Container} from 'react-bootstrap'
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';


function App() {
  return (
    <>
    <Router>
    <NavbarComp/>
    <Container className="py-4">
      <Routes>
           <Route path='/' element={<Home/>}/>      {/*<Route path='/'><Home/></Route>*/}
           <Route path='/about-us' element={<AboutUs/>}/>
           <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
      </Container>
    </Router>
    </>
  );
}

export default App;
