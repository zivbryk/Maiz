import { NoteTxt } from './note-txt.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteVideo } from './note-video.jsx'
import { NoteActions } from './note-actions.jsx'
import { noteService } from '../../keep/services/note-service.js'
import { Loading } from '../../../cmps/Loading.jsx'

export class NoteDetails extends React.Component {
    // { note, onToggleTodoStrike, onSelectNote, onClose }
    state = {
        note: null
    }

    componentDidMount() {
        console.log('note-details mounted');
        const noteId = this.props.match.params.noteId
        noteService.getNoteById(noteId)
            .then(note => {
                this.setState({ note })
            })
    }

    onToggleTodoStrike = (idx, noteId, ev) => {
        ev.stopPropagation()
        noteService.toggleTodoStrike(idx, noteId)
            .then(this.setState({ note }))
    }

    getCmp = () => {
        const { onToggleTodoStrike } = this.props
        console.log('getCmp in details', onToggleTodoStrike);
        const { note } = this.state
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

    onClose = () => {
        this.props.history.push('/keeper')
    }

    render() {
        const { note } = this.state
        // const { onClose } = this.props
        if (!note) return <Loading />

        return (
            <article className="note-details" >
                <button className="close-btn" onClick={this.onClose}> X</button>
                {this.getCmp()}
                <NoteActions note={note} />
            </article >
        )
    }
}