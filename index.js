//* required packages 
const inquirer = require('inquirer');
// const jest = require('jest');


//* build manager questions using Inquirer
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name',
        //* use the validate question object to check if valid answer
        validate: (answer) => {
            if (answer === "") {
                return 'Oops! Please enter a name for the manager';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the team manager\'s id?',
        name: 'id',
        // validate
        validate: (answer) => {
            if (isNaN(answer)) {
                return 'Oops! Please enter a valid id.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email?',
        name: 'email',
        // validate 
        validate: (answer) => {
            if (!answer.includes("@")) {
                return 'Oops! Please enter a valid email address.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'officeNumber',
        //* validate
        validate: (answer) => {
            if (answer === "") {
                return 'Oops! Please enter an office number for the manager.';
            }
            return true;
        }
    },
]

//* build engineer questions 
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'name',
        // validate
        validate: (answer) => {
            if (answer === "") {
                return 'Oops! Please enter a name for the engineer.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the engineer\'s id?',
        name: 'id',
        // validate
        validate: (answer) => {
            if (isNaN(answer)) {
                return 'Oops! Please enter a valid number.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email?',
        name: 'email',
        // validate 
        validate: (answer) => {
            if (!answer.includes("@")) {
                return 'Oops! Please enter a valid email address.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
        // validate
        validate: (answer) => {
            if (answer === "") {
                return 'Oops! Please enter a GitHub username.';
            }
            return true;
        }
    },
]

//* build intern questions 
const internQuestions = [
    {
        type: 'input',
        message: 'What is the intern\'s name?',
        name: 'name',
        // validate
        validate: (answer) => {
            if (answer === "") {
                return 'Oops! Please enter a name for the intern.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the intern\'s id?',
        name: 'id',
        // validate
        validate: (answer) => {
            if (isNaN(answer)) {
                return 'Oops! Please enter a valid number.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the intern\'s email?',
        name: 'email',
        // validate 
        validate: (answer) => {
            if (!answer.includes("@")) {
                return 'Oops! Please enter a valid email address.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the intern\`s school?',
        name: 'school',
        // validate
        validate: (answer) => {
            if (answer === "") {
                return 'Oops! Please enter a school name.';
            }
            return true;
        }
    },
]

//* add more employees option
    //* use the list type 
const selectChoice = [
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'choice',
        choices: ['Intern', 'Engineer', 'I am done adding team members']
    }
]

//* Do something with the answers! 
