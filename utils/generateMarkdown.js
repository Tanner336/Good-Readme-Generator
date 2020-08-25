module.exports = {


// function to generate markdown for README
generateMarkdown:(data) => {
  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache2: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    unlicense: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  };
  let badge;
  if("MIT" === data.License) {
    badge = badges.MIT
  }
  if("Apache License 2.0" === data.License) {
    badge = data.License
  }
  if("The Unlicense" === data.License) {
    badge = data.License
  }

  return `# ${data.Title}
  ## License:
  ${badge}
  ${data.License}

  ## Description: 
  ${data.Description}

  ## Table of Contents:
  ${data.Contents}

  ## Installation:
  ${data.Intstallation}

  ## Usage:
  ${data.Usage}

  ## Contribution Guidelines:
  ${data.Contributing}

  ## Tests:
  ${data.Tests}

  ## Questions:
  ${data.Questions}

  ${data.Email}

`;
}

};