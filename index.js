const fs = require('fs');
const inquirer = require('inquirer');
const { generateSVG } = require('./lib/generateSVG');


function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter your desired text',
                name: 'text',
                validate: (text) => {
                    if (text.length > 3) {
                        return 'No more than 3 characters';
                    }
                    return true;
                },
            },
            {
                type: 'input',
                message: 'Enter text color keyword (OR a hexadecimal number):',
                name: 'text_color',
            },
            {
                type: 'list',
                message: 'Select shape(s)',
                choices: ['circle', 'triangle', 'square'],
                name: 'shape',
            },            
            {
                type: 'input',
                message: 'Please enter desired shape color keyword (OR a hexadecimal number)',
                name: 'shape_color',
            },
        ])
        .then((data) => {
            const svgContent = generateSVG(data); // Use the 'generateSVG' function
            console.log('Generated logo.svg', svgContent);
            fs.writeFile('logo.svg', svgContent, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Generated logo.svg');
                }
            });
        });
}

init();
