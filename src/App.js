import React from 'react';
import {Route,Switch} from 'react-router-dom';


import Dashboard from './components/Dashboard/Dashboard';




export default function App() {
  return (
    <div>
     <Switch>
                    <Route exact path="/" >
                    <Dashboard></Dashboard>
                    </Route>
                   
 
    </Switch>
    </div>
    
             
        
        
      
  );
}
