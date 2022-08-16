// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const chosenLicense = data.license
  let licenseBadge = ""
  if (chosenLicense === "None"){
    return licenseBadge;
  } 
  if (chosenLicense === "MIT"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  }
  if (chosenLicense === "Apache"){
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return licenseBadge;
  }
  if (chosenLicense === "BDS 3-Clause"){
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      return licenseBadge;
  }
  if (chosenLicense === "Mozilla"){
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Mozilla_2.0-orange.svg)](https://opensource.org/licenses/MPL-2.0)";
      return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseTOC(data) {
  const chosenLicense = data.license

  if (chosenLicense === "None"){
    return ""
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const chosenLicense = data.license

  if (chosenLicense === "None"){
    return ""
  } else {
    return `# License 
This application is covered under the following license:
\n
${renderLicenseBadge(data)}`

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.title}

# Description
${data.description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation
${data.installation}

# Usage
${data.usage}

${renderLicenseSection(data)}


# Contributing 
${data.contributing}

# Tests
${data.tests}

# Questions 
* GitHub Username: https://github.com/${data.gitHub}
* Please email the following address with any additional questions:
${data.email}


`;
}

module.exports = generateMarkdown;
