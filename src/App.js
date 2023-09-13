
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { Mycontext } from './components/contexts/Mycontext';
import { useState } from 'react';


function App() {

  const [count , setCount] = useState(0)

  return (
    <>
      <Mycontext.Provider value={{count,setCount}}>
        <Navbar/>
        <Body/>
      </Mycontext.Provider>
    </>
  );
}


export default App;
