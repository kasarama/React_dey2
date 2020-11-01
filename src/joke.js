import { useState, useEffect } from "react";

/*
Click event: Create a simple React Component that can fetch 
and display a Chuck Norris joke fetched from this API: 
https://api.chucknorris.io/jokes/random whenever a button 
“Get ChuckNorris” is clicked. 

useEffect: Add a feature, so that every 10 second 
(don’t decrease this number, the risk is that they will 
    block our IP) a joke is fetched from this API: 
    https://icanhazdadjoke.com/. The documentation is here:  
    https://icanhazdadjoke.com/api. Hint: you need to add 
    an Accept key to the http header. Indicating that we will 
    fetch a json response.
useEffect: Ensure that the required timer for the dad jokes 
is cancelled when the user leaves the page.
*/

export default function Joke() {
  const [joke, setJoke] = useState("...");
  const [dadJoke, setDadJoke] = useState("Dad Joke");

  useEffect(() => {
    function fetchDadJoke() {
      console.log("Fetching dadJoke");
      fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((data) => setDadJoke(data))
        .then(console.log("fetch time: " + new Date().toString()))
        .catch((err) => console.log("Error: " + err));
    }
    let swap = setInterval(fetchDadJoke, 10000);
    /*
    
    function myStopFunction(what) {
      clearTimeout(what);
      return "You have attempted to leave this page";
    }
    window.onbeforeunload = myStopFunction(swap);
    */
    // fetchDadJoke();
  }, []);

  function fetchNorrisJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .then(console.log("Norris: " + joke.value))
      .catch((err) => console.log("Error: " + err));
  }
  return (
    <div>
      <p>{dadJoke.joke}</p>
      <button onClick={fetchNorrisJoke}>Get random Chusk Norris joke</button>
      <p>{joke.value}</p>
    </div>
  );
}
