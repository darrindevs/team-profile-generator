//* Define variables for:
    //* const inquirer 
    //* const fs = require


// require the Inquirer module 
const inquirer = require('inquirer');
// require the File System module 
const fs = require ('fs'); 

//* Create the Markdown and insert template literals 

const generateHTML = (answers) =>
`
<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/676a8cf09e.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css" />
        <title>My Team</title>
      </head>
      <body>
        <header id="team-title" class="card-header text-white bg-primary mb-5" style="text-align: center;">
          <h1>My Team</h1>
        </header>
        <div class="d-flex container">
      <div class="card m-auto shadow" style="width: 18rem;">
      <div class="card-header card-color">
        <h1>${answers.mName}</h1>
        <h2><i class="fas fa-mug-hot me-3"></i>Manager</h2>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.mId}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${answers.mEmail}">${answers.mEmail}</a></li>
          <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
        </ul>
      </div>
    </div>
    <div class="card m-auto shadow" style="width: 18rem;">
      <div class="card-header card-color">
        <h1>${answers.eName}</h1>
        <h2><i class="fas fa-glasses me-3"></i>Engineer</h2>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.eId}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${answers.eEmail}">${answers.eEmail}</a></li>
          <li class="list-group-item">Github: <a href = "https://github.com/${answers.eGH}" target="_blank">${answers.eGH}</a></li>
        </ul>
      </div>
    </div>
    <div class="card m-auto shadow" style="width: 18rem;">
      <div class="card-header card-color">
        <h1>${answers.iName}</h1>
        <h2><i class="fas fa-user-graduate me-3"></i>Intern</h2>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.iId}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${answers.iEmail}">${answers.iEmail}</a></li>
          <li class="list-group-item">School: ${answers.school}</li>
        </ul>
      </div>
    </div>
    
        </div>
      </body>
    </html>

`
;

//* Welcome the user

//* Use Inquirer to prompt user for input 
inquirer
    .prompt([
        
        {
            type: 'input',
            message: 'Hello! Welcome to the Team Profile Generator. Let\'s build your team! \n What is the team manager\'s name?',
            name: 'mName',
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
            name: 'mId',
            // validate
            validate: (answer) => {
                if (isNaN(answer)) {
                    return 'Oops! Please enter a number.';
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is the team manager\'s email?',
            name: 'mEmail',
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
        //menu
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'choice1',
            choices: ['Engineer', 'Intern', 'I am done adding team members']
        },
        // engineer 
        {
            type: 'input',
            message: 'Great! What is the engineer\'s name?',
            name: 'eName',
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
            name: 'eId',
            // validate
            validate: (answer) => {
                if (isNaN(answer)) {
                    return 'Oops! Please enter a number.';
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is the engineer\'s email?',
            name: 'eEmail',
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
            name: 'eGH',
            // validate
            validate: (answer) => {
                if (answer === "") {
                    return 'Oops! Please enter a GitHub username.';
                }
                return true;
            }
        },
        //menu
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'choice2',
            choices: ['Engineer', 'Intern', 'I am done adding team members']
        },
        //intern
        {
            type: 'input',
            message: 'Perfect! What is the intern\'s name?',
            name: 'iName',
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
            name: 'iId',
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
            name: 'iEmail',
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
        //more choices 
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'choice3',
            choices: ['Engineer', 'Intern', 'I am done adding team members']
        }
    ])
    
    .then(answers => {
        
        // pass in our answers to a new var for the content
        const htmlContent = generateHTML(answers);
        // write to the FS
        fs.writeFile('team.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Awesome! You successfully created your team!')
        );
    });
    

