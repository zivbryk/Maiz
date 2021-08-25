// import { CarPreview } from './CarPreview.jsx'
export function NoteList({ notes }) {
    return (
        <div className="note-list">
            {notes.map(note => <NotePreview key={note.id} note={note} />)}
        </div>
    )
}
