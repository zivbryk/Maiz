
export class NoteAdd extends React.Component {
    state = {
        noteType: '',
        info: {
            header: '',
            body: '',
            url: '',
            title: '',
            label: '',
            todos: [{
                txt: '',
                doneAt: null
            }],
            noteColor: '',
            isPinned: ''
        }
    }

    componentDidMount() {
        // console.log('note-add mounted')
    }

    handleInputChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? + ev.target.value : ev.target.value
        // console.log(field);
        if (field === 'todos') {
            // this.setState(prevState => ({ ...prevState, info: { ...prevState.info, ['todos']: [...prevState.info.todos.splice(0,todos.length-2), ]  } }), () => console.log(this.state))
            // this.setState(prevState => ({ ...prevState, info: { ...prevState.info, ['todos']: Object.assign(...prevState.info.todos, { [0]: { txt: [value], doneAt: null } }) } }))
        } else {
            this.setState(prevState => ({ ...prevState, info: { ...prevState.info, [field]: value } }))
        }

    }

    onSubmitNote = (ev) => {
        ev.preventDefault()
        this.props.onAddNote(this.state.noteType, this.state.info)
        this.setState(prevState => ({
            ...prevState, noteType: '', info: {
                defaultHeader: '',
                header: '',
                body: '',
                url: '',
                title: '',
                label: '',
                todos: [{
                    txt: '',
                    doneAt: null
                }],
                noteColor: '',
                isPinned: ''
            }
        }))
    }

    toggleNoteForm = (noteType) => {
        this.setState(prevState => ({ ...prevState, noteType: noteType }))

    }

    onDefaultClicked = () => {
        this.setState(prevState => ({ ...prevState, noteType: 'note-txt' }))
    }

    setNoteColor = (color) => {
        this.setState(prevState => ({ ...prevState, info: { ...prevState.info, noteColor: color } }))
    }

    onPinNote = () => {
        this.setState(prevState => ({ ...prevState, info: { ...prevState.info, isPinned: true } }))
    }

    onClose = () => {
        this.setState(prevState => ({
            ...prevState, noteType: '', info: {
                defaultHeader: '',
                header: '',
                body: '',
                url: '',
                title: '',
                label: '',
                todos: [{
                    txt: '',
                    doneAt: null
                }],
                noteColor: '',
                isPinned: ''
            }
        }))
    }

    getInput = () => {
        const { noteType, info } = this.state
        switch (noteType) {
            case "note-video":
                return (
                    <div className="note-container flex flex-column">
                        <form className="txt-note-form flex flex-column" onSubmit={this.onSubmitNote}>
                            <input className="txt-input-title add-note-input"
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={info.title}
                                onChange={this.handleInputChange} />

                            <input className="txt-input-body add-note-input"
                                type="text"
                                name="url"
                                placeholder="Url goes here..."
                                value={info.url}
                                onChange={this.handleInputChange} />

                            <button type="submit" hidden></button>
                        </form>

                        <div className="new-note-action-btns flex align-center justify-center">
                            <button className="actions-btn fas fa-thumbtack" onClick={this.onPinNote}></button>

                            <button className=" actions-btn note-color-btn fas fa-palette">
                                <input className="color-input"
                                    type="color"
                                    onChange={(event) => { this.setNoteColor(event.target.value) }}
                                    colorpick-eyedropper-active="true" />
                            </button>

                            <button className="actions-btn fas fa-window-close" onClick={this.onClose}></button>
                        </div>
                    </div>
                )

            case "note-img":
                return (
                    <div className="note-container flex flex-column">
                        <form className="txt-note-form flex flex-column" onSubmit={this.onSubmitNote}>
                            <input className="txt-input-title add-note-input"
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={info.title}
                                onChange={this.handleInputChange} />

                            <input className="txt-input-body add-note-input"
                                type="text"
                                name="url"
                                placeholder="Url goes here..."
                                value={info.url}
                                onChange={this.handleInputChange} />

                            <button type="submit" hidden></button>
                        </form>

                        <div className="new-note-action-btns flex align-center justify-center">
                            <button className="actions-btn fas fa-thumbtack" onClick={this.onPinNote}></button>

                            <button className=" actions-btn note-color-btn fas fa-palette">
                                <input className="color-input"
                                    type="color"
                                    onChange={(event) => { this.setNoteColor(event.target.value) }}
                                    colorpick-eyedropper-active="true" />
                            </button>

                            <button className="actions-btn fas fa-window-close" onClick={this.onClose}></button>
                        </div>
                    </div>
                )

            case "note-todos":
                return (
                    <div className="note-container flex flex-column">
                        <form className="txt-note-form flex flex-column" onSubmit={this.onSubmitNote}>
                            <input className="txt-input-title add-note-input"
                                type="text"
                                name="label"
                                placeholder="Title"
                                value={info.label}
                                onChange={this.handleInputChange} />

                            <button type="submit" hidden></button>

                            <div className="accordion-input">
                                {/* {console.log(info.todos[0].doneAt)} */}
                                <input className="txt-input-body add-note-input"
                                    type="text"
                                    name="todos"
                                    placeholder="List item"
                                    value={info.todos[0].txt}
                                    onChange={this.handleInputChange} />
                            </div>

                        </form>

                        <div className="new-note-action-btns flex align-center justify-center">
                            <button className="actions-btn fas fa-thumbtack" onClick={this.onPinNote}></button>

                            <button className=" actions-btn note-color-btn fas fa-palette">
                                <input className="color-input"
                                    type="color"
                                    onChange={(event) => { this.setNoteColor(event.target.value) }}
                                    colorpick-eyedropper-active="true" />
                            </button>

                            <button className="actions-btn fas fa-window-close" onClick={this.onClose}></button>
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
                            <button className="actions-btn fas fa-thumbtack" onClick={this.onPinNote}></button>

                            <button className=" actions-btn note-color-btn fas fa-palette">
                                <input className="color-input"
                                    type="color"
                                    onChange={(event) => { this.setNoteColor(event.target.value) }}
                                    colorpick-eyedropper-active="true" />
                            </button>

                            <button className="actions-btn fas fa-window-close" onClick={this.onClose}></button>
                        </div>
                    </div>
                )

            default:
                return (
                    <div className="default-note-form flex add-note-input align-center">
                        <h2 onClick={this.onDefaultClicked}>Take a note...</h2 >

                        <div className="add-note-btns flex">
                            <button className="add-note-btn" onClick={() => { this.toggleNoteForm('note-todos') }}>
                                <span className="fas fa-check-square"></span>
                            </button>

                            <button className="add-note-btn" onClick={() => { this.toggleNoteForm('note-img') }}>
                                <span className="fas fa-image"></span>
                            </button>

                            <button className="add-note-btn" onClick={() => { this.toggleNoteForm('note-video') }}>
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