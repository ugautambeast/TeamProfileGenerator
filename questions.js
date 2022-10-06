const inquirer = require('inquirer');
const fs = require('fs');


const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const managers = [];
const engineers = [];
const interns = [];

const compileTeamMember = () => {
    inquirer
        .prompt ([
            {
                type: 'confirm',
                name: 'compileTeamMember',
                message: 'Add another team member?',
            },
        ])
        .then((answers) => {
            if(answers.compileTeamMember === true) {
                question1();
            } else {
                console.log(managers, engineers, interns);
                module.exports = managers;
                module.exports = engineers;
                module.exports = interns;
                deleteHtml();
                topHtmlFile();
                managerGenerator();
                engineerGenerator();
                internGenerator();
                bottomHtmlFile();
                return answers;
            }
        });
};

const question1 = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role',
                message: 'What is employees role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then((answers) => {
            if (answers.role === 'Manager') {
                managerQuestions();
            } else if (answers.role === 'Engineer') {
                engineerQuestions();
            } else if (answers.role === 'Intern') {
                internQuestions();
            }
        });
};

question1();
const engineerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is engineers name?',
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is engineers ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is engineers email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is engineers github username?',
            },
        ])
        .then((answers) => {
            const newEngineer = new Engineer (
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            engineers.push(newEngineer);
            compileTeamMember();
        });
};

const internQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the interns name?',
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is the interns ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school did the intern attend?',
            },
        ])
        .then((answers) => {
            const newIntern = new Intern (
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            );
            interns.push(newIntern);
            compileTeamMember();
        });
};

const managerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?',
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is the managers ID?',
            },
        ])
        .then((answers) => {
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
            );
            managers.push(newManager);
            compileTeamMember();
        });
};

const deleteHtml = () => {
    fs.unlinkSync('./index.html');
};

const topHtmlFile = () => {
    fs.appendFileSync('index.html', generateHTML());
};

const managerGenerator = () => {
    managers.forEach((manager => {
        fs.appendFileSync('index.html', generateMgr(manager));
    }));
};

const engineerGenerator = () => {
    engineers.forEach((engineer => {
        fs.appendFileSync('index.html', generateEng(engineer));
    }));
};

const internGenerator = () => {
    interns.forEach((intern => {
        fs.appendFileSync('index.html', generateIntern(intern));
    }));
};

const bottomHtmlFile = () => {
    fs.appendFileSync('index.html', generateBtm());
};

const generateHTML = () => {
   return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    <title>Team Generator</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">Team Generator</h1>
            </div>
        </div>
    </div>`
}    

const generateIntern = (intern) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="intern">Intern
            </h2>
        </div>
    </div>    
            <div class="employee">
                <p>Name: ${intern.name}</p>
                <p>Email: <a href="Joe:${intern.email}">${intern.email}</a></p>
                <p>Id: ${intern.id}</p>
                <p>Role: ${intern.role}</p>
                <p>School: ${intern.school}</p>
            </div>
</div>`
}


const generateEng = (engineer) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="engineer">Engineer
            </h2>     
        </div>
    </div>
            <div class="employee">
                <p>Name: ${engineer.name}</p>
                <p>Email: <a href="Uday:${engineer.email}">${engineer.email}</a></p>
                <p>Id: ${engineer.id}</p>
                <p>Role: ${engineer.role}</p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
</div>`
}

const generateMgr = (manager) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="manager">Manager
            </h2>
        </div>
    </div>
            <div class="employee">
                <p>Name: ${manager.name}</p>
                <p>Email: <a href="Bob:${manager.email}">${manager.email}</a></p>
                <p>Id: ${manager.id}</p>
                <p>Role: ${manager.role}</p>
        </div>
</div>`
}

const generateBtm = () => {
    return `</body>
    </html>`

}