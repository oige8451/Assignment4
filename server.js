/********************************************************************************
 *  WEB322 – Assignment 02
 *
 *  I declare that this assignment is my own work in accordance with Seneca's
 *  Academic Integrity Policy:
 *
 *  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
 *
 *  Name: ___TOMI IGE___________________ Student ID: ____169604220__________ Date: _________6/6/2024_____
 *
 ********************************************************************************/
const legoSets = require("./modules/legoSets");
const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

//mark the "public" folder as "static"
app.use(express.static("public"));

// start the server on the port and output a confirmation to the console
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

// Initialize the sets data and start the server only after successful initialization
legoSets
  .initialize()
  .then(() => {
    console.log("Lego sets data initialized.");

    // Define the routes
    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/views/home.html");
    });

    app.get("/about", (req, res) => {
      res.sendFile(__dirname + "/views/about.html");
    });

    app.get("/lego/sets", (req, res) => {
      const theme = req.query.theme; // Get theme query parameter
      if (theme) {
        legoSets
          .getSetsByTheme(theme)
          .then((sets) => res.json(sets))
          .catch((error) =>
            res
              .status(404)
              .send(`Error retrieving sets by theme: ${error.message}`)
          );
      } else {
        legoSets
          .getAllSets()
          .then((sets) => res.json(sets))
          .catch((error) =>
            res
              .status(404)
              .send(`Error retrieving all lego sets: ${error.message}`)
          );
      }
    });

    app.get("/lego/sets/:set_num", (req, res) => {
      const setNum = req.params.set_num;
      legoSets
        .getSetByNum(setNum)
        .then((set) => {
          if (set) {
            res.json(set);
          } else {
            res.status(404).send(`Lego set with set_num ${setNum} not found`);
          }
        })
        .catch((error) =>
          res
            .status(404)
            .send(`Error retrieving set by setNum: ${error.message}`)
        );
    });

    app.use((req, res) => {
      res.status(404).sendFile(__dirname + "/views/404.html");
    });
  })
  .catch((error) => {
    console.error(`Initialization failed: ${error.message}`);
  });
