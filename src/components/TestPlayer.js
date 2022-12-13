import React from "react";
import data from '../Database/db.json';
import info from '../Database/team.json'
import { LargeLogo } from "./Logos"; 
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";


const TestPlayer = props => {
    
    const {abbreviation} = useParams(); 
    console.log(abbreviation)

    const location = useLocation()
    console.log(props, "props")
    console.log(location, " useLocation Hook");
    const {teamName, conference}  = location.state;
    
    console.log(data)
     console.log(info)

    //Edit JSON Object
    const result = data.league.standard.map(person => {
    const teamItem = info.league.standard.find(item => item.teamId === person.teamId )
        
          person.teamName = teamItem
          ? teamItem.fullName
           :null
        
          return data
        
          })
        console.log(result)

    //Edit JSON Object
    const changeLogo = data.league.standard.map(person => {
    const teamItem = info.league.standard.find(item => item.teamId === person.teamId )
            
        person.abbreviation = teamItem
        ? teamItem.tricode
         :null
            
    return info
               })
 console.log(changeLogo)
         


    
    return ( 

        <div>  

        <div> 
        <h2 className="font-extrabold text-center text-xl">Team: {teamName} </h2>
        <h2 className= "font-extrabold text-center text-xl">Conference: {conference} </h2>
        </div>
<div className="max-w-6xl mx-auto py-5 px-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid.cols-1 gap-1  ">

     

{data.league.standard.filter(player => player.abbreviation === abbreviation).map((player, index)  =>  (


<div className=" bg-white text-center border-4 border-primary  max-w-sm hover:shadow-xl"    key={index}>
<Link  style={{color: 'black'}}    to={{   
pathname: "/players/" + player.personId,
state: {
id: player.personId,
firstName: player.firstName,
lastName: player.lastName


}


}}  > 
<img  src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`} className="mx-auto" alt="player-pic" /> 
<p className = "font-bold" > Name: {player.firstName} {player.lastName}  </p>
<p className = "font-bold"> Team: {player.teamName}</p>
<p className = "font-bold"> Position: {player.pos}</p>
<p className = "font-bold"> Height: {player.heightFeet}'{player.heightInches}   </p>
<p className = "font-bold"> Weight: {player.weightPounds}</p>
<p className = "font-bold"> Country: {player.country}   </p>   
 <LargeLogo className="logo"  logo={player.abbreviation}  /> 
  

</Link>

</div>

  ))}


  </div>

  </div>

     );
}
 
export default TestPlayer;