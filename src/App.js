import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HQ88dKYdscGg7fvWGVDdfpZ2Qab8WqfhKT82swVvY0yKwkMMIX2fYZN5lNM4fgQnhB3ZzeaJB9jAZLMyFvIOPrc00qBwbx0Xi'
);

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is :', authUser);

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (

    <Router>
      <div className="app">

        <Switch>

           <Route path="/orders">
              <Header />
              <Orders />
              <Footer />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>

            <Route path="/payment">
              <Header />

              <Elements stripe={promise}>
                  <Payment />
              </Elements>

              <Footer />
            </Route>

            <Route path="/">
              <Header />
              <Home/>
              <Footer />
            </Route>

        </Switch>
        
       </div>
    </Router>
  );
}

export default App;