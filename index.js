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
        message: "How does one install this project?"
    },    
    {
        type: "input",
        name: "usage",
        message: "How is this project used?"
    },
    {
        type: "input",
        name: "contributors",
        message: "How does someone make contributions to the project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project."
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["None", "MIT", "Apache", "BDS 3-Clause", "Mozilla"]
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
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

