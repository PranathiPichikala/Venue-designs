import React, { useState } from 'react';
import Header from './Components/Header'; 
import Home from './Pages/Home';
import Company from './Pages/Company';


import Footer from './Components/Footer'; 
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage';

const App = () => {
  const [showSignUpPage, setShowSignUpPage] = useState(false);

  const handleRegisterClick = () => {
    setShowSignUpPage(true);
  };

  const handleSignUpPageClose = () => {
    setShowSignUpPage(false);
  };

  return (
    <>
     {/* <Header />
      <Home/>
      <Footer/> */}
      {/* <Company/>  */}
      {showSignUpPage ? (
        <SignUpPage onClose={handleSignUpPageClose} />
      ) : (
        <LoginPage onRegisterClick={handleRegisterClick} />
      )}
    </>
  );
};

export default App;
      




