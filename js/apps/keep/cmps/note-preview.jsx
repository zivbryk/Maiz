import { NoteTxt } from './note-txt.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteVideo } from './note-video.jsx'
import { NoteActions } from './note-actions.jsx'

export function NotePreview({ note, onToggleTodoStrike, onRemoveNote, onCloneNote, onPinNote, onSetNoteColor }) {
    // console.log('NotePreview props: ', onToggleTodoStrike);
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
        <section className="note-preview" style={{ backgroundColor: note.noteColor }}>
            < article  /* onClick={() => { onSelectNote(note) }} */ >
                {getCmp()}
            </article >
            < NoteActions
                note={note}
                onRemoveNote={onRemoveNote}
                onCloneNote={onCloneNote}
                onPinNote={onPinNote}
                onSetNoteColor={onSetNoteColor} />
        </section >

    )
}