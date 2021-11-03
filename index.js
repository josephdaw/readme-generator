// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of the project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions of how to install.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please outline the usage.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please outline the usage.',
        choices: ['MIT', 'GNU', 'Apache', 'Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please outline how someone can contribute to the project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please outline how to test the project.',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// function to prompt user
function promptUser() {
    return inquirer.prompt(questions)
};

// function to initialize app
function init() {
    promptUser()
    .then((answers) => generateMarkdown(answers))
    .then((data)=> writeToFile('README.md',data))
    .then(() => console.log('Success'))
    .catch((err) => console.error('Something went wrong: ',err));
};

// Function call to initialize app
init();
