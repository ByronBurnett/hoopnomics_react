import React from 'react'
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import Section from './components/Section';
import Teams from './components/team';
import Podcast from './components/Podcast';
import TestPlayer from './components/TestPlayer';
import PlayerStats from './components/PlayerStats';
import SinglePlayer from './components/SinglePlayer';
import Games from './components/Games';
import Store from './pages/Store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GameStats from './components/GameStats';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import CartProvider from './CartContext';



 function App() {
  
  
 return (
     <CartProvider> 
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

  </Switch>
   <Footer />
</div>
  </Router>
  </CartProvider>
 
   
   
  

  );
  

}

export default App;
