
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Logos from "./logos";
import { MiniLogos } from "./Logos";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import IMAGES from "../img";



const Games = () => {
  
   
   
   
    let d = new Date();


  const [game, setGame] = useState([]);
  const [year, setYear] = useState([d.getFullYear()]);
  const [month, setMonth] = useState([d.getMonth() + 1]);
  const [day, setDay] = useState([d.getDate()]);
  // const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getGames = async () => {
      const res = await fetch(
        ` https://www.balldontlie.io/api/v1/games?dates[]=${year}-${month}-${day}`
      );
      const data = await res.json();

      setGame(data.data);
    };
    getGames();
  }, []);

  console.log(game)
  
  let gameList = game.map(g => (
    <Link
    style={{color: 'black'}}   to={{
        pathname: "/stats/"  + g.id,
        state: {
          id: g.id,
          homeTeam: g.home_team.abbreviation,
          homeScore: g.home_team_score,
          hTeam : g.home_team.full_name,
          status: g.status,
          visitorTeam: g.visitor_team.abbreviation,
          visitorScore: g.visitor_team_score,
          vTeam : g.visitor_team.full_name
        }
      }}
    >
      <div key={g.id} className="  grid lg:grid-cols-5 rounded-t-lg shadow-lg bg-white gap-2 ">
        <div className="col-start-1 col-end-3">
          <MiniLogos className="logo" logo={g.visitor_team.abbreviation} />
          <div className=" font-extrabold ">{g.visitor_team.name}</div>
          <div className=" font-extrabold">{g.visitor_team_score}</div>
        </div>
       
        <div className="font-extrabold col-start-3 self-center">{g.status}</div>
        
        <div className="col-start-4 col-end-6">
        <MiniLogos className="logo" logo={g.home_team.abbreviation} />
        <div className=" font-extrabold">{g.home_team.name}</div>
        <div className=" font-extrabold">{g.home_team_score}</div>
          
          
        </div>
        <span className=" font-extrabold p-2 row-start-2 col-start-1 col-end-6 border-t-2 border-gray-400 w-full ">Box Scores</span>
    
      </div>
    </Link>
  ));

  const onClickDay = date => {
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
    setYear(date.getFullYear());
    
    
    const getGames = async () => {
      const res = await fetch(
        ` https://www.balldontlie.io/api/v1/games?dates[]=${year}-${month}-${day}`
      );
      const data = await res.json();
      setGame(data.data);
    };
    getGames();
  };

  return (
    
    
    
    <div className="all-games">
      {/* <span className="game-visitor_team">
        visit()
        <span>{game.visitor_team.abbreviation}</span>
        <span>{game.visitor_team_score}</span>
      </span> 
      <span>{game.status}</span>
      <span className="game-home_team">
        <span>{game.home_team_score}</span>
        <span>{game.home_team.abbreviation}</span>
      </span> */}
      <div className="games-calendar flex justify-center mt-5">
        <Calendar value={d} locale={"en-GB"} onClickDay={onClickDay} />
      </div>
      
      <div className=" max-w-6xl text-center mx-auto gap-2 m-5 p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">{gameList}</div>
    </div>
  );
};

export default Games;