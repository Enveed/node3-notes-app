const fs = require("fs")
const chalk = require("chalk")

const addNotes = (title, body) =>
{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote)
    {
        notes.push({
            "title": title,
            "body": body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green("New note added!"))
    }
    else{
        console.log(chalk.inverse.red("Note title taken!"))
    }
}

const removeNote = (title) =>
{
    const notes = loadNotes()
    const remainingNotes = notes.filter((note) => note.title !== title)
    if (notes.length === remainingNotes.length)
    {
        console.log(chalk.inverse.red("No note found!"))
    }
        else if (notes.length != remainingNotes.length) {
            console.log(chalk.inverse.green("Note removed"))
            saveNotes(remainingNotes)
        }
}
     
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.yellow("Your notes"))
    notes.forEach((note) => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes()
    const targetNote = notes.find((note) => note.title === title)
    if (targetNote)
    {
        console.log(chalk.inverse.yellow(title))
        console.log(targetNote.body)
    }
    else
    {
        console.log(chalk.inverse.red("Note not found!"))
    }
}

const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () =>
{
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e)
    {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
