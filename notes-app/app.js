const yargs = require('yargs')
const chalk = require('chalk')
const {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNode
} = require('./notes.js')
const log = console.log

// customize yargs version
yargs.version('1.1.2')


// add, remove, read, list notes

// create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => removeNote(argv.title)
})
// create list command
yargs.command({
    command: 'list',
    describe: 'list note',
    handler: () => listNotes()
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => readNode(argv.title)
})

yargs.parse()
