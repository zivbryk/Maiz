import { NotePreview } from '../cmps/note-preview.jsx'
export function NoteList({ notes, onToggleTodoStrike, onRemoveNote, onCloneNote, onPinNote, pinned }) {
    var pinnedNotes = notes.filter(note => note.isPinned)
    var unPinnedNotes = notes.filter(note => !note.isPinned)
    var notesToRender = pinned === 'true' ? pinnedNotes : unPinnedNotes

    return (
        <div className="note-list">
            {notesToRender.map(note => <NotePreview key={note.id}
                note={note}
                onToggleTodoStrike={onToggleTodoStrike}
                onRemoveNote={onRemoveNote}
                onCloneNote={onCloneNote}
                onPinNote={onPinNote}
            />)}
        </div>
    )
}
