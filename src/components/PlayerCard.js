import React from "react";
import axios from "axios";
import { LargeLogo } from "./Logos";




const PlayerCard = ({player, removePlayer, updateStatsBySeason}) => {

console.log(player)


    
    let date = new Date();
    let year = date.getFullYear();
    let NBASeasons = [];
    for (year; year > 1978; year--) {
      NBASeasons.push(year);


    }

    
  
    const getPlayerSeasonalAverages = async (e, player) => {
      let emptyStats = {
        data: [
          {
            games_played: 0,
            min: 0,
            fgm: 0,
            fga: 0,
            fg3m: 0,
            fg3a: 0,
            ftm: 0,
            fta: 0,
            oreb: 0,
            dreb: 0,
            reb: 0,
            ast: 0,
            stl: 0,
            blk: 0,
            turnover: 0,
            pf: 0,
            pts: 0,
            fg_pct: 0,
            fg3_pct: 0,
            ft_pct: 0,
          },
        ],
      };
      if (!e) {
        await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player.id}`)
          .then((res) => {
            player.stats = res.data;
            player.season = 2021;
             updateStatsBySeason(player);
          });
      }
      if (e) {
        await axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${e.target.value}&player_ids[]=${player.id}`
          )
          .then((res) => {
            // if statement checks to see if the api has stats. If not we fill in with 0s.
            // this makes data manipulation easier for later in the project.
            if (res.data.data.length === 0) {
              player.stats = emptyStats;
            } else {
              player.stats = res.data;
            }
  
            player.season = e.target.value;
              updateStatsBySeason(player);
            
          });
      }
    };
   
   
   
   
   
   
   
    return ( 

        <div className="border flex w-96 rounded m-2 shadow-lg">
        <div
          className="w-1/2 flex items-center justify-center text-2xl bg-white  font-bold hover:opacity-20 cursor-pointer"
          style={{
           
          }}
          onClick={() => {
           removePlayer(player.uuid) 
          }}
        >
          <div className=" bg-opacity-50 p-1 rounded ">
            {player.team}
            <LargeLogo className="logo" logo={player.team}  />
          </div>
        </div>
        <div className="w-1/2 flex flex-col p-4 justify-center bg-white  ">
          <div className="text-xl text-black font-bold ">
            {player.first_name} {player.last_name}
          </div>
          <div className=" flex font-bold">
            <div>Season:</div>
            <select
              name="year"
              id="year"
              className="bg-darkest border rounded mx-2"
              onChange={(e) => {
                getPlayerSeasonalAverages(e, player);
              }}
            >
              {NBASeasons.length > 0 &&
                NBASeasons.map((NBAseason) => {
                  return (
                    <option key={NBAseason} value={NBAseason}>
                      {NBAseason}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </div>

     );
}
 
export default PlayerCard;