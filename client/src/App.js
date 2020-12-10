import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import SignIn from './components/screens/SignIn'
import SignUp from './components/screens/SignUp'
import CreatePost from './components/screens/CreatePost'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/"> <Home/> </Route>
        <Route path="/profile"> <Profile/> </Route>
        <Route path="/signin"> <SignIn/> </Route>
        <Route path="/signup"> <SignUp/> </Route>
        <Route path="/create"> <CreatePost/> </Route>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
