import React from 'react'
import Nav from './components/Nav';
import Home from './components/Home/Home';
import Contact from './components/Home/Contact';
import Footer from './components/Home/Footer';
import Highlights from './components/Highlights';
import Section from './components/Home/Section';
import Teams from './components/Teams/team';
import Podcast from './components/Podcast';
import TestPlayer from './components/Teams/TestPlayer';
import PlayerStats from './components/Teams/PlayerStats';
import SinglePlayer from './components/Teams/SinglePlayer';
import Games from './components/Games/Games';
import Store from './pages/Store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GameStats from './components/Games/GameStats';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import CartProvider from './Context/CartContext';
import AllPlayers from './components/Stats Compare/AllPlayers';
import Blogpage from './components/Blog/Blogpage';
import Create from './components/Blog/Create';
import PostPage from './components/Blog/PostPage';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage';
import { UserContextProvider } from './Context/UserContext';




 function App() {
  
  
 return (
 
     <CartProvider> 
      <UserContextProvider> 
     <Router>  
            
  <div className="App">
   <Nav  />
  <Switch>
      <Route exact path="/">
       <Home /> 
       <Contact />

       <Section />
       </Route>


      <Route path="/highlights"  >
      <Highlights />
      </Route>

      <Route path="/podcast">
       <Podcast />
      </Route>

      <Route path="/games">
        <Games  /> 
      </Route>

    <Route path="/stats/:id">
     <GameStats />
    </Route>
      
       
      <Route path="/teams">
         <Teams  />
     </Route>

       
    <Route exact path="/roster/:abbreviation">
        <TestPlayer  />
    </Route>

    <Route path="/players/:personId">
     <SinglePlayer  />
     <PlayerStats />
    </Route>

    <Route path="/store">
         <Store  />
     </Route>

     <Route path="/cancel">
         <Cancel  />
     </Route>
     
     <Route path="/success">
         <Success  />
     </Route>

     <Route path="/nbaplayers">
       <AllPlayers />  
     </Route>

     <Route path="/blogs">
       <Blogpage />  
     </Route>

     <Route path="/create">
     <Create />
     </Route>

     <Route path="/post/:id">
      <PostPage   />
     </Route>

     <Route path="/login">
      <LoginPage  />
     </Route>

     <Route path="/register">
      <RegisterPage  />
     </Route>


    

  </Switch>
   <Footer />
</div>
  </Router> 
  </UserContextProvider>
  </CartProvider>
 
   
   
  

  );
  

}

export default App;
