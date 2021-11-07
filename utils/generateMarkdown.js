// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  }
  return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  };
  return `- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  };
  return `## License
  This project is released under the [${license} License](LICENSE)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license)
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

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
  ${licenseLink}
  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any further questions regarding this project, please reach out to be via email at ${data.email}.
  You can also check out my [GitHub profile](https://github.com/${data.githubName}) for other ways to get in touch.

  ${licenseSection}
`;
}

module.exports = generateMarkdown;
