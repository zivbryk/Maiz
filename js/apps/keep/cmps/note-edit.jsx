import { NoteTxt } from './note-txt.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteVideo } from './note-video.jsx'
import { NoteActions } from './note-actions.jsx'
import { noteService } from '../services/note-service.js'
import { Loading } from '../../../cmps/Loading.jsx'

export class NoteEdit extends React.Component {
    // { note, onToggleTodoStrike, onSelectNote, onClose }
    state = {
        note: {
            id: '',
            type: '',
            isPinned: false,
            info: {
                header: '',
                body: ''
            },
            noteColor: ''
        }
    }

    componentDidMount() {
        const noteId = this.props.match.params.noteId
        noteService.getNoteById(noteId)
            .then(note => {
                // console.log(note);
                this.setState({ note })
            })
    }

    handleInputChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            ...prevState,
            note: {
                ...prevState.note,
                info: {
                    ...prevState.note.info,
                    [field]: value
                }
            }
        }))
    }

    onSaveNote = (ev) => {
        ev.preventDefault()
        noteService.saveNote(this.state.note)
            .then(() => this.props.history.push('/keeper'))
    }

    onPinNote = (noteId) => {
        noteService.onPinNote(noteId)
            .then(this.loadNotes)
    }

    setNoteColor = (color) => {
        this.setState(prevState => ({
            ...prevState,
            note: {
                ...prevState.note,
                noteColor: color
            }
        }))
    }

    onToggleTodoStrike = (idx, noteId, ev) => {
        ev.stopPropagation()
        noteService.toggleTodoStrike(idx, noteId)
            .then(this.loadNotes)
    }

    getFormByNoteType = (noteType) => {
        const { note } = this.state
        switch (noteType) {
            case 'note-txt':
                return (
                    <form className="txt-inputs-container flex flex-column">
                        <input
                            className="edit-txt-header"
                            type="text"
                            name="header"
                            placeholder=""
                            value={note.info.header}
                            onChange={this.handleInputChange} />

                        <textarea
                            rows='20'
                            cols='1'
                            className="edit-txt-body"
                            type="text"
                            name="body"
                            placeholder=""
                            value={note.info.body}
                            onChange={this.handleInputChange} />
                        <textarea />
                    </form >
                )

            case 'note-img':
                return (
                    <form className="img-inputs-container flex flex-column align-center">
                        <img src={note.info.url} />

                        <input
                            className="edit-media-input"
                            type="text"
                            name="title"
                            placeholder=""
                            value={note.info.title}
                            onChange={this.handleInputChange} />

                        <input
                            className="edit-media-input"
                            type="text"
                            name="url"
                            placeholder=""
                            value={note.info.url}
                            onChange={this.handleInputChange} />
                    </form>
                )

            case 'note-video':
                return (
                    <form className="img-inputs-container flex flex-column align-center">
                        <video className="vid-player" controls>
                            <source src={note.info.url} type="video/mp4" />
                        </video>
                        <input
                            className="edit-media-input"
                            type="text"
                            name="title"
                            placeholder=""
                            value={note.info.title}
                            onChange={this.handleInputChange} />

                        <input
                            className="edit-media-input"
                            type="text"
                            name="url"
                            placeholder=""
                            value={note.info.url}
                            onChange={this.handleInputChange} />
                    </form>
                )

            case 'note-list':
                return (
                    <form className="img-inputs-container flex flex-column align-center">

                        <input
                            className="edit-txt-header"
                            type="text"
                            name="label"
                            placeholder=""
                            value={note.info.label}
                            onChange={this.handleInputChange} />

                        <div className="todos-container">
                            {note.info.todos.map((todo, idx) => {
                                return (
                                    <div className="todo-container" key={idx}>
                                        <input
                                            type="checkbox"
                                            id={idx}
                                            name="note"
                                            value=""
                                            checked={note.info.todos[idx].doneAt !== null}
                                            onChange={() => this.onToggleTodoStrike(idx, note.id, event)} />
                                        <label className={note.info.todos[idx].doneAt && "strike-through"} htmlFor={idx}>{todo.txt}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </form>
                )

            default:
                break;
        }
    }

    render() {
        const { note } = this.state
        if (!note) return <Loading />
        return (
            <article className="note-edit flex flex-column" style={{ backgroundColor: note.noteColor }} >

                <div className="edit-forms-container">
                    {this.getFormByNoteType(note.type)}
                </div>

                <div className="edit-action-btns">
                    <button className="edit-btn actions-btn fas fa-thumbtack" onClick={() => this.onPinNote(note.id)}></button>
                    <button className="edit-btn actions-btn fas fa-palette">
                        <input className="color-input"
                            type="color"
                            onChange={(event) => { this.setNoteColor(event.target.value) }}
                            colorpick-eyedropper-active="true" />
                    </button>
                    <button className="edit-btn actions-btn fas fa-window-close" onClick={this.onSaveNote}></button>
                </div>
            </article >
        )
    }
}

