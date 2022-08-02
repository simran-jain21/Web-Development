import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StopwatchComp from './Components/StopwatchComp';
import NavbarComp from './Components/NavbarComp';
import Home from './Components/Home';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route>
          
        </Route>
      </Routes>
    </Router>
    <NavbarComp/>
    <Home/>
    <About/>
    <StopwatchComp/>
    </>
  );
}

export default App;
