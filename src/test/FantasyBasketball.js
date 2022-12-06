import React from "react";
import axios from "axios";
import { useState, useEffect } from "react"; 


const FantasyBasketball = () => {

   const [scores, setScores] = useState([]);
   const [year, setYear]  = useState([]);
   const[month, setMonth] = useState([]);
   const [day, setDay]  = useState([]);



   const NBAScores = () => { 

    axios.get(`https://www.balldontlie.io/api/v1/games?dates[]=${year}-${month}-${day}`)
    .then(async res => {
     console.log(res.data.data)
     setScores(res.data.data)
    
   
    }).catch(err => {
    console.log(err)
    })



  }




   useEffect(()  => {

    NBAScores(); 
    
     

   },[]);


   const handleSubmit = (e) => {

    e.preventDefault();
     
    NBAScores();
    console.log(scores)
   }


    return (  

      
        
          <div className="scores-table">
       
          <h2>NBA ScoreBoard</h2>
           <form className="select-year" onSubmit={handleSubmit}  >
            <label >
              Year:
             <input type="text"
             onChange={(e)=> setYear(e.target.value)}
             value={year}
             placeholder ="please enter year"
             
             />
               

              </label>

              <label >
              Month:
             <input type="text"
             
             onChange={(e)=> setMonth(e.target.value)}
             value={month}
             placeholder ="please enter month"
             
             
             
             />
               

              </label>

              <label >
              Day:
             <input type="text"
              onChange={(e)=> setDay(e.target.value)}
              value={day}
              placeholder ="please enter day"
              
             
             
             
             />
               

              </label>
              <input className="submit" type="submit" value="Submit"/>

           </form>
        
        <table  className="content-table">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Home Team
                              </th>
                              <th>Home team score
                              </th>
                              <th >Visitors Team
                              </th>
                              <th >Visitors Team Score
                              </th>
                              <th>Status
                              </th>
                              <th>Season
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                scores.map((item, index) => (
                                  <tr key={index} className="active-row">
                                    <td >{item.date.replace(/T/, ' ').replace(/\..+/, '').slice(0,10)}</td>
                                    <td>{item.home_team.full_name}</td>
                                    <td>{item.home_team_score}</td>
                                    <td>{item.visitor_team.full_name}</td>
                                    <td>{item.visitor_team_score}</td>
                                    <td>{item.status}</td>
                                    <td>{item.season}</td>
                                  </tr>
                                ))
                            }
                          </tbody>
                          <tfoot className="content-table">
                            <tr>
                              <th>Date
                              </th>
                              <th>Home Team
                              </th>
                              <th>Home Team Score
                              </th>
                              <th>Visitors Team
                              </th>
                              <th>Visitors Team Score
                              </th>
                              <th>Status
                              </th>
                              <th>Season
                              </th>
                            </tr>
                          </tfoot>
                        </table>

        

        
                        </div>

        
        
      

    );
}
 
export default FantasyBasketball;

