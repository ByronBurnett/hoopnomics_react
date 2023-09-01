import React from "react";

import PlayerSelector from "../Stats Compare/PlayerSelector";

const AllPlayers = () => {
  return (
    <div className="m-20">
      <div className="text-2xl font-bold p-2 text-center">
        <h2>Compare NBA Player Yearly Stats</h2>
      </div>

      <PlayerSelector />
    </div>
  );
};
export default AllPlayers;
