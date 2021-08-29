// import { noteService } from '../../keep/services/note-service.js'
const { Link } = ReactRouterDOM
export function NoteActions({ note, onRemoveNote, onCloneNote, onPinNote, onSetNoteColor }) {


    return (
        <div className="note-actions flex">
            <button className="actions-btn fas fa-thumbtack" onClick={() => onPinNote(note.id)}></button>
            <button className="actions-btn fas fa-palette">
                <input className="color-input"
                    type="color"
                    onChange={(event) => { onSetNoteColor(event.target.value, note.id) }}
                    colorpick-eyedropper-active="true" />
            </button>
            <Link to={`/keeper/edit/${note.id}`}>
                <button className="actions-btn fas fa-edit">
                </button>
            </Link>
            <button className="actions-btn fas fa-clone" onClick={() => onCloneNote(note.id)}></button>
            <button className="actions-btn fas fa-at"></button>
            <button className="actions-btn fas fa-trash" onClick={() => onRemoveNote(note.id)}>
            </button>
        </div>
    )

}