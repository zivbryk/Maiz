import { NoteTxt } from './note-txt.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteVideo } from './note-video.jsx'
import { NoteActions } from './note-actions.jsx'
const { Link } = ReactRouterDOM

export function NotePreview({ note, onToggleTodoStrike, onSelectNote }) {
    function getCmp() {
        switch (note.type) {
            case "note-txt":
                return <NoteTxt note={note} />
            case "note-todos":
                return <NoteTodos note={note} onToggleTodoStrike={onToggleTodoStrike} />
            case "note-img":
                return <NoteImg note={note} />
            case "note-video":
                return <NoteVideo note={note} />

        }
    }

    return (
        <React.Fragment>
            <Link to={`/keeper/${note.id}`}>
                <article className="note-preview" /* onClick={() => { onSelectNote(note) }} */>
                    {getCmp()}
                </article>
            </Link>
            <NoteActions />
        </React.Fragment>
    )
}