
export class NoteAdd extends React.Component {
    state = {
        noteType: '',
        info: {
            header: '',
            body: '',
            url: '',
            title: '',
            label: '',
            todos: [],
            noteColor: ''
        }

    }

    componentDidMount() {
        console.log('not-add mounted')
    }

    handleInputChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? + ev.target.value : ev.target.value
        this.setState(prevState => ({ ...prevState, info: { ...prevState.info, [field]: value } }))

    }

    onSubmitNote = (ev) => {
        ev.preventDefault()
        console.log('note created in "note app"');
        this.props.onAddNote(this.state.noteType, this.state.info)
        this.setState(prevState => ({
            ...prevState, info: {
                defaultHeader: '',
                header: '',
                body: '',
                url: '',
                title: '',
                label: '',
                todos: [],
                noteColor: ''
            }
        }))
    }

    toggleNoteForm = (noteType) => {
        // console.log(noteType)
        this.setState(prevState => ({ ...prevState, noteType: noteType }))
        // console.log(this.state.noteType)
    }

    onDefaultClicked = () => {
        // console.log(this.state.noteType)
        this.setState(prevState => ({ ...prevState, noteType: 'note-txt' }))
        // console.log(this.state.noteType)
    }

    setNoteColor = (color) => {
        console.log('changing color')
        console.log(color)
    }

    onClose = () => {
        console.log('closing');
    }

    onPinNote = () => {
        console.log('pinnig note');
    }

    getInput = () => {
        const { noteType, info } = this.state
        switch (noteType) {
            case "note-todos":
                return (
                    <div className="note-container flex flex-column">
                        <form className="txt-note-form flex flex-column" onSubmit={this.onSubmitNote}>
                            <input className="txt-input-title add-note-input"
                                type="text"
                                name="header"
                                placeholder="Title"
                                value={info.header}
                                onChange={this.handleInputChange} />

                            <button type="submit" hidden></button>

                        </form>

                        <div className="new-note-action-btns flex align-center justify-center">
                            <button onClick={this.onPinNote}>Pin Note</button>
                            <button onClick={this.onChangeColor}>Change color</button>
                            <button onClick={this.onClose}>Close</button>
                        </div>
                    </div>
                )

            case 'note-txt':
                return (
                    <div className="note-container flex flex-column">
                        <form className="txt-note-form flex flex-column" onSubmit={this.onSubmitNote}>
                            <input className="txt-input-title add-note-input"
                                type="text"
                                name="header"
                                placeholder="Title"
                                value={info.header}
                                onChange={this.handleInputChange} />

                            <input className="txt-input-body add-note-input"
                                type="text"
                                name="body"
                                placeholder="Take a note..."
                                value={info.body}
                                onChange={this.handleInputChange} />

                            <button type="submit" hidden></button>


                        </form>

                        <div className="new-note-action-btns flex align-center justify-center">
                            <button onClick={this.onPinNote}>Pin Note</button>

                            <button className="note-color-btn fas fa-palette">
                                <input className="color-input"
                                    type="color"
                                    onChange={(event) => { this.setNoteColor(event.target.value) }}
                                    colorpick-eyedropper-active="true" />
                            </button>

                            <button onClick={this.onClose}>Close</button>
                        </div>
                    </div>
                )

            default:
                return (
                    <div className="default-note-form flex add-note-input" onClick={this.onDefaultClicked}>
                        <h2>Take a note...</h2>

                        <div className="add-note-btns flex">
                            <button className="add-note-btn" onClick={() => { this.toggleNoteForm('note-todos') }}>
                                <span className="fas fa-check-square"></span>
                            </button>

                            <button className="add-note-btn" onClick={() => { this.toggleNoteForm('note-img') }}>
                                <span className="fas fa-image"></span>
                            </button>

                            <button className="add-note-btn" onClick={() => { this.toggleNoteForm('note-vid') }}>
                                <span className="fab fa-youtube"></span>
                            </button>
                        </div>
                    </div>
                )
        }
    }

    render() {
        return (
            <section className="note-add">
                {this.getInput()}
            </section>
        )
    }
}