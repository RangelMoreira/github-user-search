import React from 'react';
import NavBar from './core/components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import GithubProfileSearch from './pages/GithubProfileSearch';

const Routes = () =>(
 <BrowserRouter>
   <NavBar/>
   <Switch>  
      
      <Route path="/" exact>
        <Home/>
      </Route>
      
      <Route path="/profile-search" exact>
        <GithubProfileSearch/>
      </Route>


    </Switch>
 </BrowserRouter>

);

export default Routes