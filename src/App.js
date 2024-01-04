import React, { useState, useEffect } from 'react';
import './App.css';
import search from './search.png';
import axios from "axios";



function App() {
const [location, setlocation] = useState("Delhi");
const onsearchclick = ()=>{
  let text=document.getElementById("txtsearch");
  setlocation(text);
}
const [current, setcurrent] = useState(0);
const [condition, setcondition] = useState("clear");
const [img, setimg] = useState("img")
const api=`http://api.weatherapi.com/v1/current.json?key= 732ac560fee643189af104305240301&q=${location}`;
  useEffect(() => {
    (async () => {
        try {
            const result = await axios.get(api)
            setlocation(result.data.location.name);
            setcurrent(result.data.current.temp_c);
            setcondition(result.data.current.condition.text);
            setimg(result.data.current.condition.icon);
            console.log(result.data);

        } catch (error) {
            console.error("error:",error);
        }
    })()
})

  return (

    <>
    <center>
      <div className="search-holder">
        <input type="text" placeholder="Gangtok" id="txtsearch" onChange={(e) => setlocation(e.target.value)}></input>
        <img src={search} alt="search" height="30" width="30" id="btnimg" ></img>
      </div>
    </center>
    <div className="container-main">
      <div className="container">
      <img src={img} alt="img" height="100" width="100"></img>
      {current !== null && (
       
            <span txt="txt">
              <h4>Today</h4>
              <br />
              <h1>{location}</h1>
              <br />
              <h3>
                <span className="temp">Temperature: {current}°C</span>
              </h3>
              <h3>
                <span className="temp">{condition}</span>
              </h3>
            </span>
)}

      </div>

    </div>
    
    </>
  );
}



export default App;
