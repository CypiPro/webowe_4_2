"use strict";

const express = require("express");
const app = express();

// 1.1
// app.get("/math/circle/:r", (req, res) => {
//   const r = parseFloat(req.params.r);

//   const pole = (Math.PI * r * r).toFixed(2);
//   const obwud = (2 * Math.PI * r).toFixed(2);

//   const result = {
//     area: pole,
//     circumference: obwud,
//   };

//   res.json(result);
// });

// 1.2
// app.get("/math/rectangle/:width/:height", (req, res) => {
//   const width = parseFloat(req.params.width);
//   const height = parseFloat(req.params.height);

//   const area = (width * height).toFixed(2);
//   const perimeter = (2 * width + 2 * height).toFixed(2);

//   const result = {
//     area: area,
//     perimeter: perimeter,
//   };
//   res.json(result);
// });

// 1.3
// app.get("/math/power/:base/:exponent/:root?", (req, res) => {
//   const base = parseFloat(req.params.base);
//   const exponent = parseFloat(req.params.exponent);
//   const root = req.query.root === "true";
//   var result;

//   if (isNaN(base) || isNaN(exponent)) {
//     result = {
//       error: "Invalid input",
//     };
//     res.status(400).json(result);
//     return;
//   }

//   if (root) {
//     result = {
//       result: Math.pow(base, exponent),
//       root: Math.pow(base, 1 / exponent),
//     };
//   } else {
//     result = {
//       result: Math.pow(base, exponent),
//     };
//   }
//   res.json(result);
// });

let categories = ["funnyJoke", "lameJoke"];
let funnyJoke = [
  {
    joke: "Dlaczego komputer poszedł do lekarza?",
    response: "Bo złapał wirusa!",
  },
  {
    joke: "Dlaczego komputer nie może być głodny?",
    response: "Bo ma pełen dysk!",
  },
  {
    joke: "Co mówi jeden bit do drugiego?",
    response: "„Trzymaj się, zaraz się przestawiamy!”",
  },
];

let lameJoke = [
  {
    joke: "Dlaczego programiści preferują noc?",
    response: "Bo w nocy jest mniej bugów do łapania!",
  },
  {
    joke: "Jak nazywa się bardzo szybki programista?",
    response: "Błyskawiczny kompilator!",
  },
];

const jokesByCategory = {
  funnyJoke: funnyJoke,
  lameJoke: lameJoke,
};

app.get("/jokebook/categories", (req, res) => {
  res.json(categories);
});

app.get("/jokebook/joke/:category", (req, res) => {
  const category = req.params.category;

  if (categories.includes(category)) {
    let categoryJokes = jokesByCategory[category];
    let jokeId = Math.floor(Math.random() * categoryJokes.length);

    const result = categoryJokes[jokeId];
    res.json(result);
  } else {
    const result = { error: `no jokes for category ${category}` };
    res.status(400).json(result);
  }
});

app.get("/jokebook/jokeCount/:category", (req, res) => {
  const category = req.params.category;

  if (categories.includes(category)) {
    let categoryJokes = jokesByCategory[category];
    let jokeCount = categoryJokes.length;

    const result = { count: jokeCount };
    res.json(result);
  } else {
    const result = { error: `no jokes for category ${category}` };
    res.status(400).json(result);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
