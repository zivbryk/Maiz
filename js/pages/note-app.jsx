import { noteService } from '../apps/keep/services/note-service.js'
import { NoteList } from '../apps/keep/cmps/note-list.jsx'
import { SearchFilter } from '../cmps/search-filter.jsx'
import { NotePreview } from '../apps/keep/cmps/note-preview.jsx';

export class NoteApp extends React.Component {
    state = {
        notes: [],
        filterBy: null,
        selectedNote: null
    }

    componentDidMount() {
        // const urlSrcPrm = new URLSearchParams(this.props.location.search)
        // const res = urlSrcPrm.get('q')
        // for (const [key, val] of urlSrcPrm) {
        //   console.log('key: ', key);
        //   console.log('val: ', val);
        // }
        console.log('note mounted');
        this.loadNotes();
    }

    loadNotes = () => {
        console.log('notes loaded')
        noteService.query(this.state.filterBy).then((notes) => {
            // eventBusService.emit('notes-count', notes.length)
            this.setState({ notes });
        });
    }

    onSetFilter = (filterBy) => {
        console.log('from note app:', filterBy);
        this.setState({ filterBy }, this.loadNotes);
    };

    onToggleTodoStrike = (idx, noteId) => {

        noteService.toggleTodoStrike(idx, noteId)
            .then(this.loadNotes)
        //correct the syntax so the state will update "notes" and the striked note will be rendered
        // this.setState(prevState => ({ ...prevState, notes }), this.loadNotes)
    }

    onSelectNote = (note) => {
        console.log('note from note app', note);
        this.setState({ selectedNote: note })
    }
    onDeleteNote = (noteId) => {
        noteService.deleteNote(noteId)
    }

    render() {
        const { notes, selectedNote } = this.state
        return (
            <section className="note-app flex flex-column align-center">
                <h1>Keeper</h1>

                {!selectedNote && (
                    <section className="filter-and-list flex flex-column align-center">
                        <SearchFilter onSetFilter={this.onSetFilter} />
                        <NoteList notes={notes}
                            onToggleTodoStrike={this.onToggleTodoStrike}
                            onSelectNote={this.onSelectNote} />
                    </section>
                )}
                {selectedNote && <NotePreview note={selectedNote} onToggleTodoStrike={this.onToggleTodoStrike} onSelectNote={this.onSelectNote} />}
            </section>
        )
    }
}