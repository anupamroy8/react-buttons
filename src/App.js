import React from "react";
import "./App.css";
import Heading from "./components/Heading";

const data = [
  {
    heading: "Button types",
    data: [
      { text: "SOLID", class: "solid", size: "large" },
      { text: "OUTLINED", class: "outlined", size: "large" },
      { text: "FLAT", class: "flat", size: "medium" },
    ],
  },
  {
    heading: "Button Sizes",
    data: [
      { text: "LARGE", class: "solid", size: "large" },
      { text: "MEDIUM", class: "solid", size: "medium" },
      { text: "SMALL", class: "solid", size: "small" },
      { text: "FLAT SMALL", class: "flat", size: "small" },
      { text: "OUTLINED SMALL", class: "outlined", size: "small" },
    ],
  },
  {
    heading: "Button with emojis",
    data: [
      { text: "SAMPLE TEXT", class: "flat", size: "large", icon :"true"},
      { text: "SAMPLE TEXT", class: "solid", size: "large" , icon : "true" },
      { text: "SAMPLE TEXT", class: "solid", size: "small" , icon : "true"},
      { text: "SAMPLE TEXT", class: "outlined", size: "small", icon : "true"},

    ],
  },
];

function App() {
return data.map((section) => <Heading {...section}/> )
}

export default App;
