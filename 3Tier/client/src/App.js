import "./App.css";
import { useState } from "react";

function App() {
  let [actor, setActor] = useState([]);
  let getDataFromServer = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:4397/actors", reqOption);
    let JSOData = await JSONData.json();
    setActor(JSOData);
    console.log(JSOData);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          getDataFromServer();
        }}
      >
        Get Actors
      </button>
      {actor.map((ele, i) => {
        return (
          <div key={i}>
            <h3>{ele.actorName}</h3>
            <h3>{ele.age}</h3>
            <h3>{ele.mail}</h3>
            <h3>{ele.topMovies}</h3>

          </div>
        );
      })}
    </div>
  );
}

export default App;
