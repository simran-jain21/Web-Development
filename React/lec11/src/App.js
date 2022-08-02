import './App.css';
import React,{createContext} from 'react';
import CompA from './ContextAPI/CompA'

export const NameContext = createContext();

function App() {
const name = 'Simran'
  return (
    <div className='App'>
        <NameContext.Provider value={name}>
          <CompA/>
        </NameContext.Provider>

      {/* <CompA name={name}/> */}
    </div>
  );
}

export default App;
