import React from 'react';
 import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Index from './components/Index';

function App() {
  return (
    <Router>
       <div className="wrapper">


         <Route path="/" component={Index} /> 
    </div>
    </Router>
   
  );
}

export default App;
