import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import  {auth} from './firebase'
import {useStateValue} from './StateProvider'

function App() {

  const [user,dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      if(authuser){
        dispatch({
          type : 'set_user',
          user : authuser,
        })
      }
      else{
        dispatch({
          type : 'set_user',
          user : null,
        });
      }
    })
  },[user]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">            
            <Login />
          </Route>
          <Route path="/checkout">            
            <Header/>
            <Checkout />
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
