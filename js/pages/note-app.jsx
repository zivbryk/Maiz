import { noteService } from '../../js/apps/keep/services/note-service.js'

export class NoteApp extends React.Component {
    state = {
        notes: [],
        filterBy: null,
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
        noteService.query(this.state.filterBy).then((notes) => {
            // eventBusService.emit('notes-count', notes.length)
            this.setState({ notes });
        });
    }

    render() {
        return (
            <section className="note-app">
                <h1>Keeper</h1>

                {/* <CarList cars={this.carsToDisplay} onSelectCar={this.onSelectCar} /> */}
            </section>
        )
    }
}