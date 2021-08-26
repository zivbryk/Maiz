import { emails } from '../data/emails.js'
import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    query,
    changeEmailStatus,
    addEmail,
    // getCurrencySymbol,
    // getBookById,
    // addReview,
    // removeReview,
    // saveBook,
    // loggedinUser,
}

const loggedinUser = { email: 'user@appsus.com', fullname: 'May Almog' }

const KEY = 'emailsDB';

var gEmails;

_createEmails();

function query(filterBy) {
    if (filterBy) {
        let { emailStatus } = filterBy;
        const emailsToShow = gEmails.filter(email => email.status === emailStatus)
        // const booksToShow = gBooks.filter(book => book.title.includes(bookTitle.toLowerCase()) && book.listPrice.amount <= bookPriceRange)
        return Promise.resolve(emailsToShow);
    }
    return Promise.resolve(gEmails);
}

function changeEmailStatus(emailId, status) {
    const emailIdx = gEmails.findIndex(currEmail => currEmail.id === emailId)
    let email = gEmails[emailIdx]
    //toggle status:
    if (email.status === status) {
        email.status = ''
    }else {
        email.status = status
    }
    return Promise.resolve()
}

// function saveBook(book) {

//     if (book.id) {
//         const bookIdx = gBooks.findIndex(currBook => currBook.id === book.id)
//         gBooks[bookIdx] = book
//         return Promise.resolve(gBooks[bookIdx])
//     }

// }

// function removeReview(bookId, reviewId) {
//     const bookIdx = gBooks.findIndex(book => book.id === bookId)
//     const reviewIdx = gBooks[bookIdx].reviews.findIndex(review => review.id === reviewId);
//     gBooks[bookIdx].reviews.splice(reviewIdx, 1);
//     return Promise.resolve(gBooks[bookIdx]);
// }

// function getBookById(bookId) {
//     var book = gBooks.find(function (book) {
//         return bookId === book.id
//     })
//     return Promise.resolve(book)
// }

function _createEmails() {
    gEmails = storageService.loadFromStorage(KEY)
    if (!gEmails || !gEmails.length) {
        gEmails = emails
        _saveEmailsToStorage();
    }
}



function addEmail(status, to, subject, body) {
    const emailToAdd = { 
        id: utilService.makeId(4),
        status: status,
        subject: subject,
        body: body,
        isRead: false,
        sentAt: Date.now(),
        to: to,
     }

    gEmails.push(emailToAdd)
    return Promise.resolve()
}

// function addReview(book, review) {
//     const reviewToAdd = { ...review, id: utilService.makeId() }
//     if (book.reviews) {
//         book.reviews.push(reviewToAdd)
//     } else {
//         book.reviews = [reviewToAdd]
//     }
//     _saveBooksToStorage();
//     return Promise.resolve(book);
// }

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

