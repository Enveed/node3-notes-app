const yargs = require("yargs")
const notesUtils = require("./notes.js")

yargs.version("1.1.0")

//Function to add a note
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){notesUtils.addNotes(argv.title, argv.body)}
})

//Function to remove a note
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){notesUtils.removeNote(argv.title)}
})

//Function to list all notes
yargs.command({
    command: "list",
    describe: "List all notes",
    handler(argv){notesUtils.listNotes()}
})

//Function to read a note
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){notesUtils.readNote(argv.title)}
})

yargs.parse()

//console.log(yargs.argv)
