import React, { useEffect, useState } from "react";
import { LargeLogo } from "../Logos";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const GameStats = props => {


     const location = useLocation();
     console.log(props, "props")
     console.log(location, " useLocation Hook");
     const {visitorScore, homeScore, status, homeTeam, visitorTeam, id, vTeam, hTeam} = location.state;

      console.log(visitorTeam)

  const [allStats, setAllStats] = useState([]);
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState([]);

  
  
  useEffect(() => {
    const getGameStats = async () => {
      const res = await fetch(
        `https://www.balldontlie.io/api/v1/stats?game_ids[]=${id}&per_page=35`
      );
      const data = await res.json();
      setAllStats(data.data);
    };

    const getAllTeams = async () => {
      const res = await fetch(`https://www.balldontlie.io/api/v1/teams`);
      const data = await res.json();
      setTeams(data.data);
    };

    getGameStats();
    getAllTeams();
    teams.map(team => setAllStats(team));
  }, []);

console.log(allStats)
console.log(visitorTeam)

  



const renderPlayer = (player, index) => {

     return (

     <tr key={index} className="odd:bg-white even:bg-slate-200 ">
       <td className="p-2 font-bold">{player.player.first_name} {player.player.last_name} </td>
        <td className="font-bold text-center">{player.min}</td>
        <td className="font-bold text-center">{player.pts}</td>
        <td className="font-bold text-center">{player.ast}</td>
        <td className="font-bold text-center">{player.reb}</td>
        <td className="font-bold text-center">{player.stl}</td>
        <td className="font-bold text-center">{player.blk} </td>
        <td className="font-bold text-center">{player.turnover}</td>
        <td className="font-bold text-center"> {player.fgm}</td>
        <td className="font-bold text-center"> {player.fga} </td>
        <td className="font-bold text-center"> {Math.round(player.fg_pct * 100)}%</td>
        <td className="font-bold text-center"> {player.fg3m} </td>
        <td className="font-bold text-center"> {player.fg3a} </td>
        <td className="font-bold text-center"> {Math.round(player.fg3_pct * 100)}%</td> 
     </tr>


     )
}


const homePlayers = allStats.filter(team => team.player.team_id === team.game.home_team_id)

console.log(homePlayers)


const visitorPlayers = allStats.filter(team => team.player.team_id === team.game.visitor_team_id)

console.log(visitorPlayers)


  
  return (
    <div className="">
      <div className="text-center">
        <span className="logos">
          <span className="font-extrabold"> {visitorScore} </span>
          <Link
            to={{
              pathname: "/teams/" + visitorTeam,
              state: {
                teams: team
              }
            }}
          >
            <LargeLogo logo={visitorTeam} className="team-logo" />
          </Link>
        </span >
       <span className="font-extrabold">  {status} </span>
        <span className="logos">
          <Link
            to={{
              pathname: "/teams/" + homeTeam,
              state: {
                teams: teams
              }
            }}
          >
            <LargeLogo logo={homeTeam} className="team-logo" />
          </Link>
           <span className="font-extrabold"> {homeScore}</span>
        </span>
      </div>
  
  
    <div>
      
    <table className=" border-collapse mx-auto overflow-hidden shadow-lg rounded-t-lg">
    <p className=" text-xl font-extrabold p-2">{hTeam}</p>
      <thead>
        <tr className="bg-primary text-white pt-3 pr-4 text-left ">
        <th className="p-2">Name</th>
        <th className="p-2">MIN</th>
        <th className="p-2">PTS</th>
        <th className="p-2">AST</th>
        <th className="p-2">REB</th>
        <th className="p-2">STLS</th>
        <th className="p-2">BLKS</th>
        <th className="p-2">TOV</th>
        <th className="p-2">FGM</th>
        <th className="p-2">FGA</th>
        <th className="p-2">FG%</th>
        <th className="p-2">FG3M</th>
        <th className="p-2">FG3A</th>
        <th className="p-2">FG3%</th>
          
        </tr>
       

      </thead>
      <tbody>
      {homePlayers.map(renderPlayer)}
      </tbody>
    </table>
     </div>

   
   
    <table className=" border-collapse mx-auto overflow-hidden shadow-lg rounded-t-lg m-5 ">
      <p className="text-xl font-extrabold p-2" >{vTeam}</p>
      <thead>
        <tr className="bg-primary text-white pt-3 pr-4 text-left ">
        <th className="p-2">Name</th>
        <th className="p-2">MIN</th>
        <th className="p-2">PTS</th>
        <th className="p-2">AST</th>
        <th className="p-2">REB</th>
        <th className="p-2">STLS</th>
        <th className="p-2">BLKS</th>
        <th className="p-2">TOV</th>
        <th className="p-2">FGM</th>
        <th className="p-2">FGA</th>
        <th className="p-2">FG%</th>
        <th className="p-2">FG3M</th>
        <th className="p-2">FG3A</th>
        <th className="p-2">FG3%</th>
          
        </tr>
       

      </thead>
      <tbody>
      {visitorPlayers.map(renderPlayer)}
      </tbody>
    </table>
      

    </div>
  );
};

export default GameStats;
