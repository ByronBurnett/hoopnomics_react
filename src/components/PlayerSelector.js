import React from "react";
import {useState} from 'react';
import axios from "axios";
import PlayerList from "./PlayerList";
import { v4 as uuidv4 } from "uuid";
import PlayerTable from "./PlayerTable";






const PlayerSelector = () => {
   
   
    const [search, setSearch] = useState("");
    const [playerStats, setPlayerStats] = useState([]);
    const [results, setResults] = useState([]);
    
   
    
   

    const getResults = async () => {
      await 
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${search}&per_page=10`)
        .then((res) => {
          setResults(res.data);
          console.log(results)
          console.log(search)

          // if statement to redirect to home page if someone is not on the homepage
          if (window.location.hash !== "#/") {
            
          }
        });
    };


    const handlePageChange = async (page) => {
        // Axios request that gets data based on the page of results.
        window.scrollTo(0, 0);
        await axios
          .get(`https://www.balldontlie.io/api/v1/players?search=${search}&page=${page}&per_page=10`)
          .then((res) => {
            setResults(res.data);
            console.log(results)
            console.log(search)
          });
      };
    
  
   
    const getPlayerSeasonalAverages = async (player, season) => {
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
    
        if (!season) {
         await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player.id}`)
            .then((res) => {
             
              player.uuid = uuidv4();
          
              // if statement checks to see if the api has stats. If not we fill in with 0s.
              // this makes data manipulation easier for later in the project.
              if (res.data.data.length === 0) {
                player.stats = emptyStats;
              } else {
                player.stats = res.data;
                console.log(res.data);
             
                console.log(player.uuid)

              }
              
              player.season = 2021;
              
              handleAddPlayer(player);
            });
        }
        if (season) {
          await axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=[]${season}&player_ids[]=${player.id}`)
            .then((res) => {
             
              return res.data;
              
            });
        }
        
      
        
      };
   
    
  



   
  //Function to add player
   const handleAddPlayer = () => {
    
    const players = {
      first_name: results.data[0].first_name,
      last_name: results.data[0].last_name,
      id: results.data[0].id,
      season: results.data[0].season,
      team: results.data[0].team.abbreviation,
      uuid: results.data[0].uuid,
      stats: results.data[0].stats,
      results,
      search
     
    }
    setPlayerStats([...playerStats, players])

    console.log(players)
    console.log(playerStats)
  }


  const handleInput = (e) => {
    // if statement will remove previous results if a user types into the search bar.
    if (results.data) {
      setSearch('');
    }

    setSearch(e.target.value);
  };

  const handleClear = () => {
   setSearch('')
  };

  //Function to remove player
  const removePlayer = (uuid) => {

  const newList= playerStats.filter((player)  => player.uuid !== uuid )
 
  setPlayerStats(newList)
 
   console.log(uuid)
   }
 

  //UPDATE STATS

   const updateStatsBySeason = (uuid) => {

   let newStats = [...playerStats];
   newStats.forEach((player) => {
    if (player.uuid === uuid ) {
      let newPlayer = {...player};
      newPlayer.stats =  results.data[0].stats;
      newPlayer.season = results.data[0].season;
      newPlayer.id = results.data[0].id
      
      setPlayerStats([...newStats, newPlayer]) 
    }
       setPlayerStats([...newStats])  
    
   });

    setPlayerStats(newStats) 
   
   }
   
  

   
    return ( 

        <>  

        <div className="flex justify-center m-5 ">
        <input
          type="text"
          placeholder="Enter player name"
          className="p-4 rounded"
          value={search}
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <button
          className="bg-white border-2 border-black font-bold ml-2 mr-2 text-cyan p-2 sm:p-4 rounded uppercase"
          onClick={() => {
            getResults();
           
          }}
        >
          Search
        </button>
        {search.length > 0 ? (
          <button
            className="bg-red-600 text-dark p-2 sm:p-4 rounded uppercase"
            onClick={() => {
            handleClear()
            }}
          >
            X
          </button>
        ) : (
          <button className="transparent text-transparent p-2 sm:p-4 rounded uppercase cursor-default">
            x
          </button>
        )}
      </div>
        
      
      
      <div>
      {/* {state.searchResult.length === 0 && (
        <div className="text-center">
          Search and add NBA players to begin comparing
        </div>
      )} */}
      {results && results.data && (
        
        <div className="p-4 text-center text-2xl font-bold border-b-2 border-cream md:w-1/2 md:mx-auto">
          Click or tap a player name to see their stats
        </div>
      )}
      <div className="flex flex-wrap justify-center overflow-y-auto  md:h-auto mt-4">
        {results &&
          results.data &&
          results.data.map((player) => {
            return (
              <div
                key={player.id}
                className="border-2 border-black bg-white rounded p-2 m-2 cursor-pointer hover:border-darkest text-lg "
                style={{
                 
                }}
                onClick={() => {
                  getPlayerSeasonalAverages(player);
                }}
              >
                <div className="bg-darkest font-bold rounded ">
                  {player.first_name} {player.last_name}
                </div>
              </div>
            );
          })}
          
      </div>

      

      {results &&
        results.meta &&
        results.data.length > 0 &&
        results.meta.total_pages !== 1 && (
          <div className="flex justify-center items-center pt-4">
            <div
              className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
              onClick={() => {
                handlePageChange(1);
              }}
            >
              1
            </div>
            {results.meta.next_page && (
              <div className="flex">
                {results.meta.current_page !== 1 &&
                  results.meta.current_page !== 2 && (
                    <div
                      className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                      onClick={() => {
                        handlePageChange(results.meta.next_page - 2);
                      }}
                    >
                      {results.meta.next_page - 2}
                    </div>
                  )}

                {results.meta.current_page !== 1 && (
                  <div className="border p-2 rounded font-extrabold underline ">
                    {results.meta.current_page}
                  </div>
                )}

                <div
                  className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                  onClick={() => {
                    handlePageChange(results.meta.next_page);
                  }}
                >
                  {results.meta.next_page}
                </div>
              </div>
            )}
            {!results.meta.next_page && (
              <div className="flex">
                <div
                  className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                  onClick={() => {
                    handlePageChange(results.meta.current_page - 1);
                  }}
                >
                  {results.meta.current_page - 1}
                </div>
                <div className="border p-2 rounded cursor-pointer underline font-extrabold ">
                  {results.meta.current_page}
                </div>
              </div>
            )}
          </div>
        )}
      {results.data && results.data.length > 0 && (
        <div className="flex justify-center py-4 px-12 md:px-24">
          <div
            className="uppercase border-2 border-black bg-white font-bold p-4 rounded bg-darkest cursor-pointer hover:border-deepcyan hover:bg-cream hover:text-dark"
            onClick={() => {
              handleClear();
            }}
          >
            Clear Search
          </div>
        </div>
      )}

   <PlayerList 
   playerStats={playerStats} 
   removePlayer={removePlayer} 
   updateStatsBySeason={updateStatsBySeason} />
   <PlayerTable  playerStats={playerStats}  />
    </div>

  
       
      </>

     );
}
 
export default PlayerSelector;