import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { notes } from '../data/notes.js'
import { func } from 'prop-types';

export const noteService = {
    query,
    getNoteById,
    toggleTodoStrike,
    RemoveNote,
    addNote,
    saveNote,
    cloneNote,
    onPinNote,
    setNoteColor
}

const KEY = 'notes';

var gNotes

_createNotes();

function query(filterBy) {
    if (filterBy) {
        let { bookPriceRange, bookTitle } = filterBy;
        bookPriceRange = bookPriceRange ? bookPriceRange : Infinity;
        const booksToShow = gBooks.filter(book => book.title.includes(bookTitle.toLowerCase()) && book.listPrice.amount <= bookPriceRange)
        return Promise.resolve(booksToShow);
    }
    return Promise.resolve(gBooks)
}

function query(filterBy) {
    if (filterBy) {
        var { txt } = filterBy;
        const searchRex = new RegExp(txt, 'i')
        //const notesToShow = gNotes.filter(note => note.info.txt.includes(inputTxt.toLowerCase()) ||
        // const notesToShow = gNotes.filter(note => searchRex.test(note.info.txt) ||
        //     note.info.title.includes(inputTxt.toLowerCase()) ||
        //     note.info.label.includes(inputTxt.toLowerCase()) ||
        //     note.info.todos.some(todo => todo.txt.includes(inputTxt.toLowerCase())))
        const notesToShow = gNotes.filter(note => {
            switch (note.type) {
                case "note-txt":
                    return searchRex.test(note.info.header) || searchRex.test(note.info.body)
                case "note-img":
                    return searchRex.test(note.info.title)
                case "note-todos":
                    return searchRex.test(note.info.label)
                case "note-video":
                    return searchRex.test(note.info.title)
            }
        })
        return Promise.resolve(notesToShow);
    }
    return Promise.resolve(gNotes)
}

function _createNotes() {
    gNotes = storageService.loadFromStorage(KEY)
    if (!gNotes || !gNotes.length) {
        gNotes = notes;
        _saveNotesToStorage();
    }
}


function addNote(noteType, noteInfo) {
    var noteToAdd
    switch (noteType) {
        case 'note-txt':
            noteToAdd = {
                id: utilService.makeId(),
                type: noteType,
                isPinned: noteInfo.isPinned,
                info: {
                    header: noteInfo.header,
                    body: noteInfo.body
                },
                noteColor: noteInfo.noteColor
            }
            break;

        case 'note-img':
            noteToAdd = {
                id: utilService.makeId(),
                type: noteType,
                isPinned: noteInfo.isPinned,
                info: {
                    title: noteInfo.title,
                    url: noteInfo.url
                },
                noteColor: noteInfo.noteColor
            }
            break;

        case 'note-video':
            noteToAdd = {
                id: utilService.makeId(),
                type: noteType,
                isPinned: noteInfo.isPinned,
                info: {
                    title: noteInfo.title,
                    url: noteInfo.url
                },
                noteColor: noteInfo.noteColor
            }
            break;

        case 'note-todos':
            noteToAdd = {
                id: utilService.makeId(),
                type: noteType,
                isPinned: noteInfo.isPinned,
                info: {
                    label: noteInfo.label,
                    todos: noteInfo.todos
                },
                noteColor: noteInfo.noteColor
            }
            break;
        default:
            //note-txt as default//    
            noteToAdd = {
                id: utilService.makeId(),
                type: noteType,
                isPinned: fnoteInfo.isPinned,
                info: {
                    header: noteInfo.header,
                    body: noteInfo.body
                },
                noteColor: noteInfo.noteColor
            }
            break;
    }

    gNotes.unshift(noteToAdd)
    _saveNotesToStorage()
    return Promise.resolve()
}

// function addNote(noteToEdit) {
//     var bookIdx = gBooks.findIndex(function (book) {
//         return book.id === bookToEdit.id;
//     })
//     gBooks[bookIdx].reviews.unshift({ id: review.id, name: review.name, rate: review.rate, txt: review.txt, date: review.date })
//     return Promise.resolve()
// }

function getNoteById(noteId) {
    var note = gNotes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function toggleTodoStrike(todoIdx, noteId) {
    const noteIdx = gNotes.findIndex(note => noteId === note.id)

    gNotes[noteIdx].info.todos[todoIdx].doneAt = gNotes[noteIdx].info.todos[todoIdx].doneAt ?
        gNotes[noteIdx].info.todos[todoIdx].doneAt = null :
        gNotes[noteIdx].info.todos[todoIdx].doneAt = Date.now()
    // getNoteById(noteId)
    //     .then(note => {
    //         gNotes[idx].info.todos[idx].doneAt ?
    //             gNotes[idx].info.todos[idx].doneAt = null :
    //             gNotes[idx].info.todos[idx].doneAt = Date.now()
    //         console.log(idx, note.info.todos[idx].doneAt)
    //     })
    _saveNotesToStorage()
    return Promise.resolve()
}

function RemoveNote(noteId) {
    console.log('delete from service')
    var noteIdx = gNotes.findIndex(function (note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage()
    return Promise.resolve()
}

function saveNote(noteToEdit) {
    var noteIdx = gNotes.findIndex(note => note.id === noteToEdit.id)
    gNotes[noteIdx] = noteToEdit
    _saveNotesToStorage()
    return Promise.resolve()
}

function cloneNote(noteId) {
    var note = JSON.parse(JSON.stringify(gNotes.find(note => noteId === note.id)))
    note.id = utilService.makeId()
    gNotes.unshift(note)
    _saveNotesToStorage()
    return Promise.resolve()
}

function onPinNote(noteId) {
    var note = gNotes.find(note => noteId === note.id)
    note.isPinned = true
    _saveNotesToStorage()
    return Promise.resolve()
}

function setNoteColor(color, noteId) {
    var note = gNotes.find(note => noteId === note.id)
    note.noteColor = color
    _saveNotesToStorage()
    return Promise.resolve()
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}