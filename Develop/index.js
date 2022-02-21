const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select an option')
                return false;
                }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide the steps for installation');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide what your project is used for');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please list any contributions?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter contributions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How is this project tested?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please explain how project is tested');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'askMe',
        message: 'What is your Github username?',
        validate: askMeInput => {
            if (askMeInput) {
                return true;
            } else {
                console.log('Please provide your username ');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email so there is another way to be reached for questions?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email');
                return false;
            }
        }
    }
];




// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;}
            resolve({
                ok: true
            });
        });
    });
};

// Function call to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        let fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();

// exports
module.exports = questions;