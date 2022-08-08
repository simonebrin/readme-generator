// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for this project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your description for this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What need to be installed to run this project?"
    },    
    {
        type: "input",
        name: "usage",
        message: "What steps do you take to run this project?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["None", "MIT", "Apache", "Boost", "BDS 3-Clause"]
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(data)
        if(err){
            console.log(err)
        } else {
            console.log("You have successfuolly created your readme.")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data))
        console.log(data)
    })
}

// Function call to initialize app
init();

