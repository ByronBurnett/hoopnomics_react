import React from "react";
import PlayerCard from "../Stats Compare/PlayerCard";

const PlayerList = ({ playerStats, removePlayer, updateStatsBySeason }) => {
  console.log(playerStats);

  return (
    <div>
      {playerStats.length > 0 && (
        <div className="flex flex-col justify-center items-center pb-4">
          <div className="flex items-center justify-around">
            <div className="text-2xl uppercase">Player List</div>
            {/* <div className="mx-4 py-1 px-2 text-2xl border rounded-full hover:bg-cream hover:text-darkest cursor-pointer">
                ?
              </div> */}
          </div>

          <div className="flex flex-wrap justify-center items-stretch">
            {playerStats.length > 0 &&
              playerStats.map((player) => {
                return (
                  <PlayerCard
                    player={player}
                    key={player.uuid}
                    removePlayer={removePlayer}
                    updateStatsBySeason={updateStatsBySeason}
                  />
                );
              })}
          </div>
          <div className="flex justify-center place-items-end text-left w-full ">
            <div className="text-gray-500 text-sm p-4 ">
              <ul>
                <li className="pb-2">
                  You can add the same player multiple times and compare
                  different seasons
                </li>
                <li className="pb-2">
                  Click or tap a player's team name to remove the player
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerList;
