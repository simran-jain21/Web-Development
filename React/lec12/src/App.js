import './App.css';
import FormikComp from './Components/FormikComp';
import NavbarComp from './Components/NavbarComp';
import AddDataComp from './Components/AddDataComp'
import ApiComp from './Components/ApiComp';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <FormikComp/>
      {/* <Router>  
        <NavbarComp/>
          <Routes>
            <Route path="/" element={<ApiComp/>} />
            <Route path="/add-data" element={<AddDataComp/>}/>
          </Routes>
      </Router> */}
    </div>
  );
}

export default App;
