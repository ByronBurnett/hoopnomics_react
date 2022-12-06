import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";



   const AllPlayers = () => {   

      

      const [playerName, setPlayerName] = useState();
      const [playerStats, setPlayerStats] = useState([]);
      const [season, setSeason] = useState();
     

  
   const   PlayerId = () => {    

      axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
      .then(async res => { 
        if(res.data.data[0] === undefined){
          alert("This player is either injured or hasn't played yet!")
        } else if(res.data.data.length > 1){
         alert("Please specify the name more!")
        } else{
          await PlayerStats(res.data.data[0].id)
          
  
        }
      }).catch(err => {
        console.log(err)
      })
    }
       


     const  PlayerStats = (playerId) => { 

      const api = 'https://www.balldontlie.io/api/v1/season_averages?season='
      const year = `${season}`
      const ballerId = `&player_ids[]=${playerId}`

      const url = api + year + ballerId

    axios.get(url)
    .then( async res => { 
    console.log(res.data.data[0])
    setPlayerStats(res.data.data[0])
    }).catch(err => { 
     console.log(err)
    })

  }


     useEffect(()  => {   

      
     
      PlayerId();
      PlayerStats();
  


    }, [])


    const handleSubmit = (e) => { 
      e.preventDefault();
      PlayerId();
      console.log(playerName)
     }


    

    
    
    return (  
               
      

      <div className="nba-stats" >

       <h2>NBA Historical Stats 1979-2022</h2>


      <form  onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type="text"
        onChange={(e) => setPlayerName(e.target.value.split(" ").join("_"))}
        placeholder="please enter player name"
        
        />
      </label>
      
      <label id="year">Year:</label>
       
       <select name="nba-season" 
       id="full-year"
      value={season}
      onChange={(e)=> setSeason(e.target.value)}>
       <option >1979</option>     
       <option> 1980</option>
       <option> 1981</option>
       <option >1982</option>
       <option >1983</option>
       <option >1984</option>
       <option >1985</option>
       <option >1986</option>
       <option >1987</option>
       <option >1988</option>
       <option >1989</option>
       <option >1990</option>
       <option >1991</option>
       <option >1992</option>
       <option> 1993</option>
       <option >1994</option>
       <option >1995</option>
       <option >1996</option>
       <option >1997</option>
       <option >1998</option>
       <option >1999</option>
       <option >2000</option>
       <option >2001</option>
       <option >2002</option>
       <option >2003</option>
       <option >2004</option>
       <option >2005</option>
       <option >2006</option>
       <option >2007</option>
       <option >2008</option>
       <option >2009</option>
       <option >2010</option>
       <option >2011</option>
       <option >2012</option>
       <option >2013</option>
       <option >2014</option>
       <option >2015</option>
       <option >2016</option>
       <option >2017</option>
       <option >2018</option>
       <option >2019</option>
       <option >2020</option>
       <option >2021</option>
       <option >2022</option>
       </select><br />
       
       <input className="submit" type="submit" value="Submit"/>
      </form>

      <div className="stats"> 
      
      
      <div className="stats-basestats">
      <h5>Season:</h5> 
      {playerStats["season"]}
      </div>
        
        <div className="stats-basestats">
      <h5>Games Played
        </h5> {playerStats["games_played"]}
      </div>

      <div className="stats-basestats">   
      <h5>PPG  
        </h5> {playerStats["pts"]}
       </div>
         
         <div className="stats-basestats">
      <h5>Reb</h5> 
         {playerStats["reb"]}
         </div>
         
         <div className="stats-basestats">
      <h5>Ast </h5>  {playerStats["ast"]}
      </div> 
         <div className="stats-basestats">
      <h5> MPG</h5> 
      {playerStats["min"]}
      </div>
         <div className="stats-basestats">
      <h5>Stl</h5> {playerStats["stl"]}
      </div> 
       <div className="stats-basestats">
      <h5>Blk </h5> {playerStats["blk"]}
      </div>
      <div className="stats-basestats">
      <h5>TO </h5> {playerStats["turnover"]}
      </div>
      <div className="stats-basestats">
     <h5>FG%</h5>  
     {Math.round(playerStats["fg_pct"] * 100)}%
      </div>

      <div className="stats-basestats">
      <h5>FGA</h5> {playerStats["fga"]}
      </div>
      <div className="stats-basestats">
      <h5> FGM </h5> 
      {playerStats["fgm"]}
      </div>
      
      <div className="stats-basestats">
     <h5> FT% </h5>  
     {Math.round(playerStats["ft_pct"]  * 100)}%
      </div>
      

      </div>
          

      </div>





    );

}
export default AllPlayers;