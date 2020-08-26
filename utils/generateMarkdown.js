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
    badge = badges.Apache2
  }
  if("The Unlicense" === data.License) {
    badge = badges.unlicense
  }

  return `# ${data.Title}
  ## License:
  ${badge}
  This application is covered under the ${data.License} License.

  ## Description: 
  ${data.Description}

  ## Table of Contents:
  [Installation](#Installation)
  [Usage](#Usage)
  [Contribution-Guidelines](#Contribution-Guidelines)
  [Test](#Test)
  [Questions/Contact](#Questions)

  ## Installation:
  ${data.Installation}

  ## Usage:
  ${data.Usage}

  ## Contribution Guidelines:
  ${data.Contributing}

  ## Tests:
  ${data.Tests}

  ## Questions:
  Github 
  [Github](${data.Questions})
  
  Email Address, please reach out with any questions
  ${data.Email}

`;
}

};