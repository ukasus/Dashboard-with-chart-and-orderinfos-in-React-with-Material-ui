import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Dashboard from './components/Dashboard/Dashboard';
import Catalouge from './components/ProductsCatalouge/Catalouge';
import Cart from './components/Cart/Cart.js';
import OrderSummaryPage from './components/Cart/OrderSummaryPage.js'




export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/products" >
          <Catalouge></Catalouge>
        </Route>
        <Route exact path="/cart" >
          <Cart></Cart>
        </Route>
        <Route exact path="/orderSummary" >
          <OrderSummaryPage></OrderSummaryPage>
        </Route>


      </Switch>
    </div>





  );
}
