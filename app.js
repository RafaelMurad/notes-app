const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')


//creat add command
yargs.command({
    command: 'add',
    description: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }


})

//create remove command
yargs.command({
    command: 'remove',
    description: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }

})

//create read command
yargs.command({
    command: 'read',
    description: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.readNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    description: 'List a note',
    handler() {
        notes.listNotes()
    }
})
 

//add, remove, read, list

yargs.parse()

//console.log(yargs.argv)