import { NotePreview } from '../cmps/note-preview.jsx'
export function NoteList({ notes, onToggleTodoStrike, onRemoveNote }) {
    return (
        <div className="note-list ">
            {notes.map(note => <NotePreview key={note.id}
                note={note}
                onToggleTodoStrike={onToggleTodoStrike}
                onRemoveNote={onRemoveNote}
            />)}
        </div>
    )
}
