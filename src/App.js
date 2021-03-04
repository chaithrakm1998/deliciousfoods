import React from 'react';
import './App.css';
import Header from './components/header/header.components';
import Homepage from './pages/homepage/homepage.component';
import HotelPage from './pages/hotels/hotels.component';
import {Route} from 'react-router-dom'
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/signin' component={SignInSignUpPage} />
      <Route exact path='/hotels' component={HotelPage}/>
     
    </div>
  );
}

export default App;