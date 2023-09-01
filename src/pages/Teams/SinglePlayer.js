import React from "react";
import data from "../../data/db.json";
import info from "../../data/team.json";
import { useParams } from "react-router-dom";
import { LargeLogo } from "../../assets/Logos";

const SinglePlayer = (props) => {
  const { personId } = useParams();
  console.log(personId);

  const result = data.league.standard.map((person) => {
    const teamItem = info.league.standard.find(
      (item) => item.teamId === person.teamId
    );
    person.teamName = teamItem ? teamItem.fullName : null;

    return data;
  });
  console.log(result);

  const changeLogo = data.league.standard.map((person) => {
    const teamItem = info.league.standard.find(
      (item) => item.teamId === person.teamId
    );
    person.abbreviation = teamItem ? teamItem.tricode : null;

    return info;
  });
  console.log(changeLogo);

  return (
    <div className="grid grid-cols-1 mx-auto text-center max-w-xs m-5">
      {data.league.standard
        .filter((player) => player.personId === personId)
        .map((player, index) => (
          <div
            className=" max-w-xs  bg-white text-center border-4 border-primary shadow-xl"
            key={index}
          >
            <img
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
              className=" basketball-cards mx-auto bg-indigo-200 rounded-full m-2 object-cover object-center h-44 w-44 "
              alt="player-pic"
            />

            <p className="font-bold">
              {" "}
              Name: {player.firstName} {player.lastName}{" "}
            </p>
            <p className="font-bold"> Team: {player.teamName}</p>
            <p className="font-bold"> Position: {player.pos}</p>
            <p className="font-bold">
              {" "}
              Height: {player.heightFeet}'{player.heightInches}{" "}
            </p>
            <p className="font-bold"> Weight: {player.weightPounds}</p>
            <p className="font-bold"> Country: {player.country} </p>
            <LargeLogo className="logo" logo={player.abbreviation} />
          </div>
        ))}
    </div>
  );
};

export default SinglePlayer;
