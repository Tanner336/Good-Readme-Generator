const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of the project",
  },
  {
    type: "input",
    name: "Description",
    message: "What is the project?",  
  },
  {
    type: "input",
    name: "Contents",
    message: "Please list out your Table of Contents",
  },
  {
    type: "input",
    name: "Installation",
    message: "What do you need to do to install this application?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is this project used for?",
  }, 
  {
    type: "list",
    name: "License",
    message: "Choose a License used for this project.",
    choices: ["MIT", "Apache License 2.0", "The Unlicense"]
  },
  {
    type: "input",
    name: "Contributing",
    message: "What are some contributing guidelines?",
  },
  {
    type: "input",
    name: "Tests",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    name: "Questions",
    message: "Enter your Github User name?",
  },
  {
    type: "input",
    name: "Email",
    message: "Enter your email.",
  },
];


// function to write README file
function writeToFile(data) {
  fs.writeFile("README.md")
}

// function to initialize program
function init() {
  inquirer
  .prompt(questions) 

  .then(answers => {
    console.log(answers);
    fs.writeFile('./README.md', generateMarkdown.generateMarkdown(answers), function(err) {})  
  
  })

  // .catch(error) {
  //   console.error(error)
  // }
    
}


// function call to initialize program
init();
