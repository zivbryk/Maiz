
export class NoteAdd extends React.Component {
    state = {
        formType: 'txt'
    }

    componentDidMount() {
        console.log('not-add mounted')
    }

    render() {
        const { formType } = this.state

        return (

            <section className="note-add flex align-center space-between">
                <div className="add-note-forms">
                    <form className="txt-note-form">
                        <input className="add-note-input" type="text" placeholder="Take a note..." />
                    </form>

                </div>

                <div className="add-note-btns flex">
                    <button className="add-note-btn"><span className="nav-icon fas fa-home"></span></button>
                    <button className="add-note-btn"><span className="nav-icon fas fa-home"></span></button>
                    <button className="add-note-btn"><span className="nav-icon fas fa-home"></span></button>
                </div>
            </section>
        )
    }
}