import { NoteTxt } from './note-txt.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteVideo } from './note-video.jsx'

export function NotePreview({ note }) {

    return (
        <article className="note-preview">
            {note.type === "note-txt" && <NoteTxt note={note} />}
            {note.type === "note-todos" && <NoteTodos note={note} />}
            {note.type === "note-img" && <NoteImg note={note} />}
            {note.type === "note-video" && <NoteVideo note={note} />}
        </article>
    )
}