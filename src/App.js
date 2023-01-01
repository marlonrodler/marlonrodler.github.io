import React from 'react'
import { HashRouter  as Router, Routes, Route} from "react-router-dom";

import './App.css';

import Card from './pages/Card'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Card/>} />
        </Routes>
    </Router>
  );
}

export default App;