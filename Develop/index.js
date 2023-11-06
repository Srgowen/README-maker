const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application

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
      message: 'Provide a short description explaining the what, why, and how of your project:',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'learned',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles:',
    },
    {
      type: 'input',
      name: 'thirdPartyAssets',
      message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section:',
    },
    {
      type: 'input',
      name: 'tutorials',
      message: 'If you followed tutorials, include links to those here as well:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/):',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README.md file has been successfully created.`);
    }
  });
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${data.description}\n\n## Motivation\n${data.motivation}\n\n## Problem Solved\n${data.problem}\n\n## What I Learned\n${data.learned}\n\n## Credits\n${data.credits}\n\n## Third-Party Assets\n${data.thirdPartyAssets}\n\n## Tutorials\n${data.tutorials}\n\n## License\n${data.license}\n`;
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

