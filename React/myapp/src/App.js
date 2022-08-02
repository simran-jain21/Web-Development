import './App.css';
import MyComponent from './components/MyComponent'
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';         //Single component in a file
import MultiArrowF3, {MultiArrowF1,MultiArrowF2} from './components/MultiArrowF';   //multiple component in a file  //export default(alag se likha niche) is priority than export default const
function App() {
  return (
    <div>
          <Firstcomponent/>
          <Secondcomponent/>
    </div>
  );
}

export default App;
