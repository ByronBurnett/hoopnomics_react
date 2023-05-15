import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MiniLogos } from "../../assets/Logos";



const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {    
    
    const getAllTeams = async () => {
      const res = await fetch(`https://www.balldontlie.io/api/v1/teams`);
      const data = await res.json();
      setTeams(data.data);
    };

    getAllTeams();
  }, []);

  console.log(teams)



  return (
    <div className="max-w-6-xl mx-auto text-center p-2 m-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {teams.map((team , index)  => (
    <Link   style={{color: 'black'}} to={{ 
      pathname: "/roster/" + team.abbreviation,
      state:{
      abbreviation: team.abbreviation,
      city: team.city,
      conference: team.conference,
      division: team.division,
      teamName: team.full_name,
      id: team.id,
      name: team.name


      }
  
  
  }} 
    

    >   
      <div  key={index}>
      <MiniLogos className="logo" logo={team.abbreviation} />
      <span>{team.abbreviation}</span>
    </div>
    </Link>

      ))}

    </div>
  );
};

export default Team;