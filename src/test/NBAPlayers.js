import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {LargeLogo} from  '../components/Logos';
import { useParams } from "react-router-dom";






const NBAPlayers = () => {
    
   
   const {abbreviation} = useParams(); 
   console.log(abbreviation)
 
   
   
   
   



       const [players, setPlayers] = useState([]);
       const [teams, setTeams] = useState([]);
         

       const PlayerList = ()  =>  {

        axios.get('http://data.nba.net/data/10s/prod/v1/2022/players.json')
        .then(async res => {  
         console.log(res.data.league.standard)
         setPlayers(res.data.league.standard)
        }).catch(err => {
           console.log(err)
   
         
   
        })
       
       }




       const TeamList = ()  =>  {

         axios.get('http://data.nba.net/data/10s/prod/v2/2022/teams.json')
         .then(async res => {  
          console.log(res.data.league.standard)
          setTeams(res.data.league.standard)
         }).catch(err => {
            console.log(err)
    
          
    
         })
        
        }
 

   useEffect(()  =>  { 

   PlayerList();
   TeamList();

   },[])


  




 console.log(players)
 console.log(teams)



//Adding matching values using 2 maps using map and find
const result = players.map(person => {
const teamItem = teams.find(item => item.teamId === person.teamId )

  person.teamName = teamItem
  ? teamItem.fullName
   :null

  return players

  })
  console.log(result)


  const changeLogo = players.map(person => {
   const teamItem = teams.find(item => item.teamId === person.teamId )
   
     person.abbreviation = teamItem
     ? teamItem.tricode
      :null
   
     return players
   
     })
     console.log(changeLogo)





    
    return ( 

           <div>  

            <h2 className="learn-params">{abbreviation}</h2>  
  
  <div className="teamName">

         

  {players.filter(player => player.abbreviation === abbreviation).map((player, index)  =>  (


 <div className="eachTeam"    key={index}>
<Link  style={{color: 'black'}}    to={{   
 pathname: "/players/" + player.personId,
 state: {
id: player.personId,
firstName: player.firstName,
lastName: player.lastName


 }




 
  

}}  > 
<img  src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`} alt="player-pic" /> 
<p> Name: {player.firstName} {player.lastName}  </p>
 <p> Team: {player.teamName}</p>
 <p> Position: {player.pos}</p>
 <p> Height: {player.heightFeet}'{player.heightInches}   </p>
 <p> Weight: {player.weightPounds}</p>
 <p> Country: {player.country}   </p>   
 
 <LargeLogo className="logo" logo={player.abbreviation}  />


</Link>

   


</div>

  ))}


  </div>

  </div>
	
     );

}
 
export default NBAPlayers