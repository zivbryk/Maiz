// import { noteService } from '../../keep/services/note-service.js'
const { Link } = ReactRouterDOM
export function NoteActions({ note, onRemoveNote }) {


    function setNoteColor(color) {
        // console.log('changing color')
        // console.log(color)

    }

    return (
        <div className="note-actions">
            <button className="actions-btn fas fa-thumbtack"></button>
            <button className="actions-btn fas fa-palette">
                <input className="color-input"
                    type="color"
                    onChange={(event) => { setNoteColor(event.target.value) }}
                    colorpick-eyedropper-active="true" />
            </button>
            <Link to={`/keeper/edit/${note.id}`}>
                <button className="actions-btn fas fa-edit">
                </button>
            </Link>
            <button className="actions-btn fas fa-clone"></button>
            <button className="actions-btn fas fa-at"></button>
            <button className="actions-btn fas fa-trash" onClick={() => onRemoveNote(note.id)}>
            </button>
        </div>
    )

}