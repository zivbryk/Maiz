import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { notes } from '../data/notes.js'

export const noteService = {
    query,
    // saveCar,
    // deleteCar,
    // getCarById,
    // getNextCarId
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
        let { inputTxt } = filterBy;
        const searchRex = new RegExp(inputTxt, 'i')
        //const notesToShow = gNotes.filter(note => note.info.txt.includes(inputTxt.toLowerCase()) ||
        // const notesToShow = gNotes.filter(note => searchRex.test(note.info.txt) ||
        //     note.info.title.includes(inputTxt.toLowerCase()) ||
        //     note.info.label.includes(inputTxt.toLowerCase()) ||
        //     note.info.todos.some(todo => todo.txt.includes(inputTxt.toLowerCase())))
        const notesToShow = gNotes.filter(note => {
            switch (note.type) {
                case "note-txt":
                    return searchRex.test(note.info.txt)
                case "note-img":
                    return searchRex.test(note.info.title)
                case "note-todos":
                    return searchRex.test(note.info.label)
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

// function addNote(noteToEdit) {
//     var bookIdx = gBooks.findIndex(function (book) {
//         return book.id === bookToEdit.id;
//     })
//     gBooks[bookIdx].reviews.unshift({ id: review.id, name: review.name, rate: review.rate, txt: review.txt, date: review.date })
//     return Promise.resolve()
// }


function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}