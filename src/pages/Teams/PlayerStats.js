import React, { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";

const PlayerStats = (props) => {
  
  
     const location = useLocation();
     console.log(props, "props")
     console.log(location, " useLocation Hook");
  
     const { firstName, lastName} = location.state;
     

    

  const [playerInfo, setPlayerInfo] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);
  
  

  useEffect(() => {
    const getPlayerInfo = async () => {
      const res = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${firstName}_${lastName}`
      );
      const data = await res.json();
      setPlayerInfo(data.data[0]);
 
    };

    getPlayerInfo();
  }, []);

   console.log(playerInfo)


  useEffect(() => {
    const getStats = async () => {
      const res = await fetch(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerInfo.id}`
      );
      try {
        const data = await res.json();
        setPlayerStats(data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [playerInfo]);

  console.log(playerStats)

 
  return (
    
      <div className="grid grid-cols-10 max-w-5xl mt-5 mx-auto p-8 border-primary items-center">
        <div className=" player-stats ">
        <h5>GP</h5>
          {playerStats ? playerStats.games_played : ""} 
          </div>
          <div className=" player-stats ">
          <h5>MIN</h5>
          {playerStats ? playerStats.min : ""}
        </div>
        <div className=" player-stats">
          <h5>PTS</h5>
          {playerStats ? playerStats.pts : "" }
        </div>
        <div className="  player-stats">
          <h5>AST</h5>
          {playerStats ? playerStats.ast : "" }
        </div>
        <div className=" player-stats">
          <h5>REB</h5>
          {playerStats ? playerStats.reb : "" }
        </div>
        <div className=" player-stats">
          <h5>BLK</h5>
          {playerStats ? playerStats.blk : "" }
        </div>
        <div className="player-stats">
          <h5>STL</h5>
          {playerStats ? playerStats.stl : "" }
        </div>
        <div className=" player-stats">
          <h5>TO</h5>
          {playerStats ? playerStats.turnover : "" }
        </div>
        <div className="player-stats">
          <h5>PF</h5>
          {playerStats ? playerStats.pf : "" }
        </div>
        <div className="player-stats">
          <h5 className="">OREB</h5>
          {playerStats ? playerStats.oreb : "" }
        </div>
        <div className="player-stats">
          <h5>DREB</h5>
          {playerStats ? playerStats.dreb : "" }
        </div>
        <div className="player-stats">
          <h5>FGM</h5>
          {playerStats ? playerStats.fgm : "" }
        </div>
        <div className="player-stats">
          <h5>FGA</h5>
          {playerStats ? playerStats.fga : "" }
        </div>
        <div className="player-stats">
          <h5>FG%</h5>
          {Math.round(playerStats ? playerStats.fg_pct * 100 : ""  )}%
          {/* {playerStats.fg_pct * 100}% */}
        </div>
        <div className="player-stats">
          <h5>FG3M</h5>
          {playerStats ? playerStats.fg3m : ""}
        </div>
        <div className="player-stats">
          <h5>FG3A</h5>
          {playerStats ? playerStats.fg3a : "" }
        </div>
        <div className=" player-stats">
          <h5>FG3%</h5>
          {Math.round(playerStats ? playerStats.fg3_pct * 100  : ""  )}%
          {/* {playerStats.fg3_pct * 100}% */}
        </div>
        <div className=" player-stats">
          <h5>FTM</h5>
          {playerStats ? playerStats.ftm : "" }
        </div>
        <div className=" player-stats">
          <h5>FTA</h5>
          {playerStats ? playerStats.fta : "" }
        </div>
        <div className=" player-stats">
          <h5>FT%</h5>
          {Math.round(playerStats ? playerStats.ft_pct * 100 : "" * 10) }%
          {/* {Math.round(playerStats.ft_pct * 10) / 10} */}
        </div>
    
    </div>
  );
};

export default PlayerStats;
