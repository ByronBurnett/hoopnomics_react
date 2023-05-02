import React from 'react'
import Nav from './components/Nav';
import Home from '../src/pages/Home/Home';
import Contact from '../src/pages/Home/Contact';
import Footer from '../src/pages/Home/Footer';
import Highlights from '../src/pages/Highlights';
import Section from '../src/pages/Home/Section';
import Teams from '../src/pages/Teams/team';
import Podcast from '../src/pages/Podcast';
import TestPlayer from '../src/pages/Teams/TestPlayer';
import PlayerStats from '../src/pages/Teams/PlayerStats';
import SinglePlayer from '../src/pages/Teams/SinglePlayer';
import Games from '../src/pages/Games/Games';
import Store from './pages/Cart/Store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GameStats from '../src/pages/Games/GameStats';
import Cancel from './pages/Cart/Cancel';
import Success from './pages/Cart/Success';
import CartProvider from  './context/CartContext'
import AllPlayers from '../src/pages/Stats Compare/AllPlayers';
import Blogpage from '../src/pages/Blog/Blogpage';
import Create from '../src/pages/Blog/Create';
import PostPage from '../src/pages/Blog/PostPage';
import LoginPage from '../src/pages/LoginPage'
import RegisterPage from '../src/pages/RegisterPage';
import { UserContextProvider } from './context/UserContext';




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
