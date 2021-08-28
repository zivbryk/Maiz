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

    getFormByNoteType = (noteType) => {
        const { note } = this.state
        switch (noteType) {
            case 'note-txt':
                return (
                    <form className="txt-inputs-container flex flex-column align-center">
                        <input type="text"
                            name="header"
                            placeholder=""
                            value={note.info.header}
                            onChange={this.handleInputChange} />

                        <input type="text"
                            name="body"
                            placeholder=""
                            value={note.info.body}
                            onChange={this.handleInputChange} />
                    </form>
                )

            case 'note-img':
                return (
                    <form className="img-inputs-container flex flex-column align-center">
                        <img src={note.info.url} />

                        <input
                            className="edit-input"
                            type="text"
                            name="title"
                            placeholder=""
                            value={note.info.title}
                            onChange={this.handleInputChange} />

                        <input
                            className="edit-input"
                            type="text"
                            name="url"
                            placeholder=""
                            value={note.info.url}
                            onChange={this.handleInputChange} />
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
            <article className="note-edit flex flex-column" >

                <div className="edit-forms-container">
                    {this.getFormByNoteType(note.type)}
                </div>

                <div className="edit-action-btns">
                    <button onClick={this.onSaveNote}>close</button>
                </div>
            </article >
        )
    }
}

