const inquirer = require('inquirer');
const fs = require('fs');

// Define a function to generate the table of contents
function generateTableOfContents(data) {
    return `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
`;
}

// Define a function to generate the badge and license notice
function generateLicenseSection(license) {
    return `
## License
[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

This application is covered under the ${license} license.
`;
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'Unlicense'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} has been successfully created.`);
        }
    });
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${generateTableOfContents(data)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${generateLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions or need further assistance, feel free to reach out to me via [GitHub](https://github.com/${data.github}) or email at ${data.email}.
`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userInput) => {
        const markdown = generateMarkdown(userInput);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
