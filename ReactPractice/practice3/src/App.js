import './App.css';
import FormikComp from './Components/FormikComp';
import ApiComp from './Components/ApiComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddDataComp from './Components/AddDataComp'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      {/* <FormikComp/> */}
      <Router>  
        {/* <NavbarComp/> */}
          <Routes>
            <Route path="/" element={<ApiComp/>} />
            <Route path="/add-data" element={<AddDataComp/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
