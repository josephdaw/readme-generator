// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    console.log("renderLicenseBadge")
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  console.log("no license")
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("renderLicenseLink")
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("renderLicenseSection")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${licenseBadge}
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
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributing}
  
  ## Questions
 
  ## License
  This project is released under the [${data.license} License](LICENSE)
`;
}

module.exports = generateMarkdown;
