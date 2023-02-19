import React, {useEffect} from "react";
import Card from "./components/Card"
import Main from "./pages/Main"
import Restaurant from "./pages/Restaurant";
import { Route, Routes, useLocation } from "react-router-dom"
import {Auth, useAuth} from '@arcana/auth-react'

function App() {
  const auth = useAuth();
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  
  const onLogin = () => {
    // authentication page
  }
  const account =
    auth.loading === true
      ? auth.isLoggedIn === true
        ? auth.user.address
        : null
      : null;
  console.log("arcana",account)
  return (
    <div>
      <div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        
        <Routes>
      <Route exact path="/" element= {<Main/>} />
      <Route path="/wallet" element= {<Card/>} />
      <Route path="/restaurant/:id" element={<Restaurant/>} />
    </Routes>
      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
        </div>
      )}
    </div>
    
    </div>
  );
}

export default App;
