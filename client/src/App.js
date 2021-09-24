import './App.css';
import React,{Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Photos from './components/cards/Photos';
function App() {
  return (
    <section className="container-fluid">
        <Navbar/>
        <Photos/>
      
    </section>
  );
}

export default App;
