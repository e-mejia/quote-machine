import React from "react";
import { useEffect } from "react";
import Quote from "./components/Quote";
import Icons from "./components/Icons";
import Newquote from "./components/Newquote";
import "./App.css";

function App() {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");

  /* A function that generates a random number that is between
   0 and the length of the quote array*/

  const hexChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  function getRandomQuote(arr) {
    let random = Math.floor(Math.random() * arr.length);
    return random;
  }
  function getRandomHexNumber() {
    let newColor = "";
    // Generate six random numbers that will be used as the
    // hex value for the colors
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 16);
      newColor += hexChars[index];
    }
    return `#${newColor}`;
  }

  async function getQuote() {
    let api_url = "https://type.fit/api/quotes";

    let response = await fetch(`${api_url}`);
    let data = await response.json();

    let randomquote = getRandomQuote(data);

    setQuote(data[randomquote].text);
    if (data[randomquote].author === null) {
      setAuthor("Author unknown");
    } else {
      setAuthor(data[randomquote].author);
    }
  }

  useEffect(function () {
    getQuote();
  }, []);

  let setColor = getRandomHexNumber();

  return (
    <div className="App" style={{ backgroundColor: `${setColor}` }}>
      <div className="quote-box">
        <Quote quote={quote} author={author} setColor={setColor} />
        <div className="footer">
          <Icons setColor={setColor} />
          <Newquote onClick={getQuote} setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
