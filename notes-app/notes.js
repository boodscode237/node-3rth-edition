"use strict";
const fs = require('fs')
const chalk = require('chalk')

const notePath = 'notes.json'
const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({title, body})
        saveNotes(notes)
        console.log(chalk.green.inverse(`the title '${title.toUpperCase()}' was added to the json file.`))
    } else {
        console.log(chalk.red.inverse(`the title '${title.toUpperCase()}' already in use.`))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note) => note.title !== title)
    if (notes.length > filteredNotes.length){
        console.log(chalk.green.inverse(`The note ${title.toUpperCase()} was removed`))
        saveNotes(filteredNotes)
    }else{
        console.log(chalk.red.inverse(`No note found for ${title.toUpperCase()}`))
    }
}
const readNode = (title) => {
    const notes = loadNotes()
    const noteFound = notes.find((note) => note.title === title)
    if (noteFound){
        console.log(chalk.green.inverse(`You have to ${noteFound.title.toUpperCase()}. More precisely ${noteFound.body.toUpperCase()}`))
    } else {
        console.log(chalk.red.inverse(`No note found for ${title.toUpperCase()}`))
    }
}

const listNotes  = () => {
    const notes = loadNotes()
    notes.forEach((note, i) => {
        console.log(chalk.green.inverse(`${i} - You have to ${note.title.toUpperCase()}. More precisely ${note.body.toUpperCase()}`))
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(notePath, dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync(notePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        console.log(e.message)
        return []
    }

}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNode
}