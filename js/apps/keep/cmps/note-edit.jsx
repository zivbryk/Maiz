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
                console.log(note);
                this.setState({ note })
            })
    }

    handleInputChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ note: { ...prevState.car, [field]: value } }))

    }

    render() {
        const { note } = this.state.note
        // send  green color as prop to "Loading"
        if (!note) return <Loading />

        return (
            <article className="note-edit flex flex-column" >
                <div className="edit-header flex">
                    <button className="close-btn" onClick={this.onClose}> X</button>
                </div>

                <form className="inputs-container flex flex-column align-center">
                    <input type="text"
                        name="header"
                        placeholder="Title"
                        value={note.info.header}
                        onChange={this.handleInputChange} />

                    <input type="text"
                        name="body"
                        placeholder="Take a note..."
                        value={note.info.body}
                        onChange={this.handleInputChange} />
                </form>


                {/* <NoteActions note={note} /> */}
            </article >
        )
    }
}

