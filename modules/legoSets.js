// Importing setData and themeData from the specified paths
const setData = require("../data/setData");
const themeData = require("../data/themeData");

// Initializing the sets array to an empty array
let sets = [];

// Function to initialize the sets array with setData and corresponding theme names
function initialize() {
  return new Promise((resolve, reject) => {
    try {
      setData.forEach((set) => {
        const theme = themeData.find((theme) => theme.id === set.theme_id);
        // Create a new set object with the theme name
        const newSet = { ...set, theme: theme ? theme.name : "Unknown" };
        // Add the new set object to the sets array
        sets.push(newSet);
      });
      resolve();
    } catch (error) {
      reject(`Error initializing sets`);
    }
  });
}

// Function to return all sets
function getAllSets() {
  return new Promise((resolve, reject) => {
    if (sets.length === 0) {
      let err = "getAllSets does not have sets.";
      reject({ message: err });
    } else {
      resolve(sets);
    }
  });
}

// Function to return a specific set by its set_num
function getSetByNum(setNum) {
  return new Promise((resolve, reject) => {
    const foundSet = sets.find((set) => set.set_num === setNum);
    if (foundSet) {
      resolve(foundSet);
    } else {
      reject(`: unable to find requested sets`);
    }
  });
}

// Function to return an array of sets that match a given theme (case-insensitive)
function getSetsByTheme(theme) {
  return new Promise((resolve, reject) => {
    const lowerCaseTheme = theme.toLowerCase();
    const foundSets = sets.filter((set) =>
      set.theme.toLowerCase().includes(lowerCaseTheme)
    );
    if (foundSets.length > 0) {
      resolve(foundSets);
    } else {
      reject(`: unable to find requested sets`);
    }
  });
}

// Exporting the functions to be used in other modules
module.exports = {
  initialize,
  getAllSets,
  getSetByNum,
  getSetsByTheme,
};
