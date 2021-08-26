// import { noteService } from '../../keep/services/note-service.js'

export function NoteActions({ note, onRemoveNote }) {




    return (
        <div className="note-actions">
            <button>Color</button>
            <button>Pin</button>
            <button>Edit</button>
            <button>Copy</button>
            <button onClick={() => onRemoveNote(note.id)}>Delete</button>
            <button>Send</button>
        </div>
    )

}