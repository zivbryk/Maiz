import { utilService } from '../../../services/util.service.js'

export const notes = [
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            header: "Do the Laundry",
            body: "do not use soap or detergents"
        }
    }, {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: { header: "Plant Bananas!" }
    }, {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: { header: "Buy Doron a Bday present" }
    }, {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: { header: "Fullstack Me Baby!" }
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: { backgroundColor: "#00d" }
    },
    {
        id: utilService.makeId(),
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [{
                txt: "Driving liscence",
                doneAt: null
            },
            {
                txt: "Coding power",
                doneAt: 187111111
            }]
        },
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: { header: "Fullstack Me Baby!" }
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: { header: "Fullstack Me Baby!" }
    }
]