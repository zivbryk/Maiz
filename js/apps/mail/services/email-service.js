import { emails } from '../data/emails.js'
import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    query,
    changeEmailStatus,
    addEmail,
    getEmailById,
    changeEmailReadStatus,
    clearTrash,
    progressEmailRead,
    // loggedinUser,
}

const loggedinUser = { email: 'user@appsus.com', fullname: 'May Almog' }

const KEY = 'emailsDB';

var gEmails;

_createEmails();

function query(filterBy, filterByTxt, filterByRead, sortBy) {
    if (!filterBy) {
        filterBy = {emailStatus: 'inbox'}
    }
    if (filterBy) {
        let { emailStatus } = filterBy;
        var emailsToShow = gEmails.filter(email => 
            email.status === emailStatus //every email has emailStatus
            )
            
        if (filterByTxt){
            let { txt } = filterByTxt;
            emailsToShow = gEmails.filter(email => 
                email.subject.toLowerCase().includes(txt.toLowerCase()) 
                || email.body.toLowerCase().includes(txt.toLowerCase()) 
                )
        } 
        if (filterByRead){
            let filter = filterByRead;
           
            switch (filter) {
                case 'all':
                    emailsToShow = gEmails.filter(email => 
                        email.isRead || !email.isRead 
                        )
                break;
                case 'read':
                    emailsToShow = gEmails.filter(email => 
                        email.isRead 
                        )
                break;
                case 'unread':
                    emailsToShow = gEmails.filter(email => 
                        !email.isRead 
                        )
                break;
            
                default:
                    emailsToShow = gEmails.filter(email => 
                        email.isRead || !email.isRead 
                        )
                    break;
            }
        
        } 
        if(sortBy) {
          switch (sortBy) {
            case 'date':
                  emailsToShow.sort(compareByDate)
            break;
            case 'abc':    
                emailsToShow.sort(compareBySubject)
            break;
                      
            default:
                  emailsToShow.sort(compareByDate)
            break;
          }
        }
    
    return Promise.resolve(emailsToShow);
    }

    return Promise.resolve(gEmails);
}

function compareByDate(a, b) {
    const emailSortA = a.sentAt;
    const emailSortB = b.sentAt;
    let comparison = 0;
    if (emailSortA > emailSortB) {
      comparison = 1;
    } else if (emailSortA < emailSortB) {
      comparison = -1;
    }
    return comparison;

}

function compareBySubject(a, b) {
    const emailSortA = a.subject.toLowerCase();
    const emailSortB = b.subject.toLowerCase();
    let comparison = 0;
    if (emailSortA > emailSortB) {
      comparison = 1;
    } else if (emailSortA < emailSortB) {
      comparison = -1;
    }
    return comparison;

}

function changeEmailStatus(emailId, status) {
    const emailIdx = gEmails.findIndex(currEmail => currEmail.id === emailId)
    let email = gEmails[emailIdx]
    //toggle status:
    if (email.status === 'trash' && status === 'trash') {
        removeEmail(emailId)
    }else {
        email.status = status
    }
    _saveEmailsToStorage();
    return Promise.resolve()
}

function changeEmailReadStatus(emailId, readStatus) { //change isRead status to true when opening email
    const emailIdx = gEmails.findIndex(currEmail => currEmail.id === emailId)
    let email = gEmails[emailIdx]
    
    email.isRead = readStatus
    console.log(email)
    
    _saveEmailsToStorage();
    return Promise.resolve()
}

function removeEmail(emailId) {
    const emailIdx = gEmails.findIndex(currEmail => currEmail.id === emailId)
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage();

}

function clearTrash() {
    const emailsInTrash = gEmails.filter(email => email.status === 'trash')
    const emailsToRemove = emailsInTrash.map(email => email.id)
    console.log(emailsToRemove)
    emailsToRemove.forEach(id => removeEmail(id))
    return Promise.resolve()
}

function getEmailById(emailId) {
    var email = gEmails.find(function (email) {
        return emailId === email.id
    })
    return Promise.resolve(email)
}

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
    _saveEmailsToStorage();
    return Promise.resolve()
}

function progressEmailRead() {//return a % value of read emails for progress bar
    const readEmails = gEmails.filter(email => email.isRead)
    // const unreadEmails = gEmails.filter(email => !email.isRead)
    const progressBar = (readEmails.length/gEmails.length)*100
    return Promise.resolve(progressBar)
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

