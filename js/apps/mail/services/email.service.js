import { emails } from '../data/emails.js'
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const bookService = {
    query,
    getCurrencySymbol,
    getBookById,
    addReview,
    removeReview,
    saveBook,
    // loggedinUser,
}

const loggedinUser = { email: 'user@appsus.com', fullname: 'May Almog' }

const KEY = 'emailsDB';

var gEmails;

_createEmails();

function query(filterBy) {
    // if (filterBy) {
    //     let { bookPriceRange, bookTitle } = filterBy;
    //     bookPriceRange = bookPriceRange ? bookPriceRange : Infinity;
    //     const booksToShow = gBooks.filter(book => book.title.includes(bookTitle.toLowerCase()) && book.listPrice.amount <= bookPriceRange)
    //     return Promise.resolve(booksToShow);
    // }
    return Promise.resolve(gEmails)
}

function getCurrencySymbol(currencyCode) {
    // const { book } = this.props
    // const currencyCode = book.listPrice.currencyCode;
    switch (currencyCode) {
        case 'EUR':
            return '€';
            return Promise.resolve('€')
            break;
        case 'ILS':
            return '₪';
            return Promise.resolve('₪')
            break;
        case 'USD':
            return '$';
            return Promise.resolve('$')
            break;
    }
}

function saveBook(book) {

    if (book.id) {
        const bookIdx = gBooks.findIndex(currBook => currBook.id === book.id)
        gBooks[bookIdx] = book
        return Promise.resolve(gBooks[bookIdx])
    }

}

function removeReview(bookId, reviewId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    const reviewIdx = gBooks[bookIdx].reviews.findIndex(review => review.id === reviewId);
    gBooks[bookIdx].reviews.splice(reviewIdx, 1);
    return Promise.resolve(gBooks[bookIdx]);
}

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return Promise.resolve(book)
}

function _createEmails() {
    gEmails = storageService.loadFromStorage(KEY)
    if (!gEmails || !gEmails.length) {
        gEmails = emails
        _saveEmailsToStorage();
    }
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gInboxEmails)
}

function addReview(book, review) {
    const reviewToAdd = { ...review, id: utilService.makeId() }
    if (book.reviews) {
        book.reviews.push(reviewToAdd)
    } else {
        book.reviews = [reviewToAdd]
    }
    _saveBooksToStorage();
    return Promise.resolve(book);
}

