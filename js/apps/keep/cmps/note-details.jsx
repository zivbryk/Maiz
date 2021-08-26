import { NoteTxt } from './note-txt.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteVideo } from './note-video.jsx'
import { NoteActions } from './note-actions.jsx'
import { noteService } from '../../keep/services/note-service'
import { Loading } from '../../../cmps'

export class NoteDetails extends React.Component {
    // { note, onToggleTodoStrike, onSelectNote, onClose }
    state = {
        note: null
    }
    componentDidMount() {
        console.log('note-details mounted');
        const noteId = this.propsmatch.params.noteId
        noteService.getNoteById(noteId)
            .then(book => {
                this.setState({ note })
            })
    }


    getCmp = () => {
        const { note, onToggleTodoStrike } = this.props
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

    render() {
        const { note } = this.state
        const { onClose } = this.props
        if (!note) return <Loading />

        return (
            <article className="note-details" >
                <button className="close-btn" onClick={onClose}> X</button>
                {this.getCmp()}
                <NoteActions />
            </article >
        )
    }
}