import { } from '../'

export const notes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Do the Laundry" }
    }, {
        id: "n102",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Plant Bananas!" }
    }, {
        id: "n103",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Buy Doron a Bday present" }
    }, {
        id: "n104",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    },
    {
        id: "n105",
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: { backgroundColor: "#00d" }
    },
    {
        id: "n106",
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
        id: "n107",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    },
    {
        id: "n108",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    }
]