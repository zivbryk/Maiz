import { NotePreview } from '../cmps/note-preview.jsx'
export function NoteList({ notes, onToggleTodoStrike, onSelectNote }) {
    return (
        <div className="note-list ">
            {notes.map(note => <NotePreview key={note.id}
                note={note}
                onToggleTodoStrike={onToggleTodoStrike}
                onSelectNote={onSelectNote} />)}
        </div>
    )
}
