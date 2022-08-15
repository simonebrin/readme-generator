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
  if (chosenLicense === "Boost"){
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      return licenseBadge;
  }
  if (chosenLicense === "BDS 3-Clause"){
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
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
${renderLicenseBadge(data)}`

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title
${data.title}

# Description
${data.description}

# Table of Contents
${renderLicenseSection(data)}
${renderLicenseTOC(data)}


`;
}

module.exports = generateMarkdown;
