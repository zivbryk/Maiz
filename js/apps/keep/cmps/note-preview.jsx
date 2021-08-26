import { NoteTxt } from './note-txt.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteVideo } from './note-video.jsx'

export function NotePreview({ note }) {
    function getCmp() {
        switch (note.type) {
            case "note-txt":
                return <NoteTxt note={note} />
            case "note-todos":
                return <NoteTodos note={note} />
            case "note-img":
                return <NoteImg note={note} />
            case "note-video":
                return <NoteVideo note={note} />

        }
    }

    return (
        <article className="note-preview">
            {getCmp()}
            {/* {note.type === "note-txt" && <NoteTxt note={note} />}
            {note.type === "note-todos" && <NoteTodos note={note} />}
            {note.type === "note-img" && <NoteImg note={note} />}
            {note.type === "note-video" && <NoteVideo note={note} />} */}
        </article>
    )
}