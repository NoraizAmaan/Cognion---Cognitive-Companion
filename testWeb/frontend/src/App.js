import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { auth, signInWithGoogle } from "./components/Firebase";

import Hangout from './components/Hangout';
import Main from './components/Main';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [isUserSigned, setIsUserSigned] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) setIsUserSigned(true);
    else setIsUserSigned(false);
  })

  console.log("Is User Signed : ", isUserSigned);

  const signout = () => {
    auth.signOut()
  }

  return (
    <div classNameName="App">
      <BrowserRouter>
        <Navigation signOut={signout} isUserSigned={isUserSigned} />

        <Routes>
          <Route path="/" element={<Main isUserSigned={isUserSigned} signout={signout}/>} />
          <Route path="chat" element={<Hangout isUserSigned={isUserSigned}/>} />
          
        </Routes>
        
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
