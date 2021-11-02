const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
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
        choices: ['MIT', 'GNU GPLv3', 'Apache', 'The Unlicense']
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
  ]);
};

const generateMarkdown = ({ title, description, installation, usage, license, contributing, tests}) =>
  `# ${title}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F.svg?&logo=node.js&logoColor=white)
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Tests
  ${tests}

  ## Contributing
  ${contributing}
  
  ## Questions
 
  ## License
  This project is released under the [${license} License](LICENSE)`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
  // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();