/********************************************************************************
*  WEB322 – Assignment 03
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: _______Tomi ige_______________ Student ID: ____169604220 __________ Date: _______20/7/24_______
*
*  Published URL: ________________https://assignment-3-iota-smoky.vercel.app_________________________________________
*
********************************************************************************/

const legoSets = require("./modules/legoSets");
const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Mark the "public" folder as "static"
app.use(express.static("public"));

// Initialize the sets data and start the server only after successful initialization
legoSets
  .initialize()
  .then(() => {
    console.log("Lego sets data initialized.");

    // Define the routes
    app.get("/", (req, res) => {
      res.render("home");
    });

    app.get("/about", (req, res) => {
      res.render("about");
    });

    app.get("/lego/sets", (req, res) => {
      const theme = req.query.theme; // Get theme query parameter
      if (theme) {
        legoSets
          .getSetsByTheme(theme)
          .then((sets) => {
            if (sets.length === 0) {
              return res.status(404).render("404", { message: "No sets found for the selected theme." });
            }
            res.render("sets", { sets: sets });
          })
          .catch((error) =>
            res.status(404).render("404", { message: `Error retrieving sets by theme: ${error.message}` })
          );
      } else {
        legoSets
          .getAllSets()
          .then((sets) => {
            if (sets.length === 0) {
              return res.status(404).render("404", { message: "No sets found." });
            }
            res.render("sets", { sets: sets });
          })
          .catch((error) =>
            res.status(404).render("404", { message: `Error retrieving all Lego sets: ${error.message}` })
          );
      }
    });

    app.get("/lego/sets/:set_num", (req, res) => {
      const setNum = req.params.set_num;
      legoSets
        .getSetByNum(setNum)
        .then((set) => {
          if (set) {
            res.render("set", { set: set });
          } else {
            res.status(404).render("404", { message: `Lego set with set_num ${setNum} not found.` });
          }
        })
        .catch((error) =>
          res.status(404).render("404", { message: `Error retrieving set by set_num: ${error.message}` })
        );
    });


    app.use((req, res) => {
      res.status(404).render("404", { message: "Page not found." });
    });

    // Start the server after initializing routes
    app.listen(HTTP_PORT, () => console.log(`Server listening on: ${HTTP_PORT}`));

  })
  .catch((error) => {
    console.error(`Initialization failed: ${error.message}`);
  });
