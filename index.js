const program = require('commander');
const {
    getCollection
} = require('./additional');

const { prompt } = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'collection',
        message: 'Enter collection name'
    }
];

program
    .version('0.0.1')
    .description('Mongoclone');

program
    .command('getCollection')
    .alias('g')
    .description('Get collection')
    .action(() => {
        prompt(questions).then(answers => {
            getCollection(answers);
        });
    });

program.parse(process.argv);