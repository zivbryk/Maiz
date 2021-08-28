import { noteService } from '../apps/keep/services/note-service.js'
import { NoteList } from '../apps/keep/cmps/note-list.jsx'
import { SearchFilter } from '../cmps/search-filter.jsx'
import { NoteAdd } from '../apps/keep/cmps/note-add.jsx'
import { NotePreview } from '../apps/keep/cmps/note-preview.jsx';
import { NoteDetails } from '../apps/keep/cmps/note-edit.jsx';

export class NoteApp extends React.Component {
    state = {
        notes: [],
        filterBy: null,
    }

    componentDidMount() {
        // console.log('note mounted');
        this.loadNotes();
    }

    loadNotes = () => {
        // console.log('notes loaded')
        noteService.query(this.state.filterBy).then((notes) => {
            // eventBusService.emit('notes-count', notes.length)
            this.setState({ notes });
        });
    }

    onAddNote = (noteType, info) => {
        noteService.addNote(noteType, info)
            .then(this.loadNotes)
    }

    onSetFilter = (filterBy) => {
        // console.log('from note app:', filterBy);
        this.setState({ filterBy }, this.loadNotes);
    }

    onToggleTodoStrike = (idx, noteId, ev) => {
        ev.stopPropagation()
        noteService.toggleTodoStrike(idx, noteId)
            .then(this.loadNotes)
    }

    onRemoveNote = (noteId) => {
        noteService.RemoveNote(noteId)
            .then(this.loadNotes)
    }

    render() {
        const { notes } = this.state

        return (
            <section className="note-app flex flex-column align-center">

                <section className="filter-and-list flex flex-column align-center">
                    <NoteAdd onAddNote={this.onAddNote} />
                    <SearchFilter onSetFilter={this.onSetFilter} />
                    <NoteList notes={notes}
                        onToggleTodoStrike={this.onToggleTodoStrike}
                        onSelectNote={this.onSelectNote}
                        onRemoveNote={this.onRemoveNote} />
                </section>

            </section>
        )
    }
}