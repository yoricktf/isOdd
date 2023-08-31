const express = require('express');
const PORT = process.env.PORT || 5050;
const path = require('path');
const app = express();

const adverts = [
  'Try Slurm, its highly addictive!',
  "Buy Fry's Greatest Holophonor Hits now for only 9.99!",
  'Def-Con Owl Traps, Kills owls dead! Try it now!',
  'Arachno Spores - The fatal spore with the funny name!',
  "Need a drum of 2,075 degrees Boron? Nobody doesn't like Molten Boron!",
  'Lightspeed Briefs - for the discriminating crotch. As seen in your dreams',
  'Order 10 blank robots, get another free! (Mac formatted)',
  "Feeling down? Why not try a Stop-and-Drop Suicide Booth, America's favourite suicide booth since 2008",
  'Hungry and in a rush? Try Bachelor Chow, now with flavor!',
  "Bean-Bay Beans: They're The Beaniest! Bean-Bay frijoles: los frijoles de los reyes.",
  'Dunder Mifflin, for all your paper needs',
  'Saul Goodman & Associates - For all your legal needs, Better Call Saul!',
  "Bob's Burgers, try our burger of the day - The Cauliflower's Cumin From Inside the House Burger (comes with cauliflower & cumin)",
  "The Bluth Company - Getting you in a house you don't need.",
  'Sabre Printers - For all your printing needs',
];

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/api', (req, res) => {
  let number = req.query.number;
  let advertIndex = Math.floor(Math.random() * adverts.length);

  if (Number.isInteger(Number(number))) {
    res.json({
      ad: adverts[advertIndex],
      number: number,
      isodd: number % 2 === 1 ? true : false,
    });
  } else {
    res.json({
      error:
        "I can't even begin to tell you how silly this input is. Please enter an actual whole number.",
    });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`isOdd API is listening on port ${PORT}`);
});
