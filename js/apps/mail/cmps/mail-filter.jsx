

export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            emailStatus: null,
        },

    }

    componentDidMount() {
        this.setState(prevState => (({ ...prevState, filterBy: { ...prevState.filterBy, emailStatus: 'inbox' } })), () => {
            this.props.onSetFilter(this.state.filterBy)
        })

    }

    onChooseFilter = (ev) => {
        const value = ev.target.value;
        this.setState(prevState => (({ ...prevState, filterBy: { ...prevState.filterBy, emailStatus: value } })), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }


    render() {
        const { progress } = this.props

        const progressWidth = progress.toString() + '%'


        return (
            <section className="email-side-filter">

                <button className="inbox-folder " value="inbox" onClick={this.onChooseFilter}><span className="fas fa-inbox"></span></button>
                <button className="starred-folder " value="starred" onClick={this.onChooseFilter}><span className="fas fa-star"></span></button>
                <button className="sent-folder " value="sent" onClick={this.onChooseFilter}><span className="fas fa-paper-plane"></span></button>
                <button className="draft-folder " value="draft" onClick={this.onChooseFilter}><span className="fab fa-firstdraft"></span></button>
                <button className="trash-folder" value="trash" onClick={this.onChooseFilter}><span className=" fas fa-trash"></span></button>
                {this.state.filterBy.emailStatus ===
                    'trash' &&
                    <button className="clear-trash-btn" onClick={this.props.onClearTrash}>
                        Clear Trash
                    </button>}

                <div className="progress-bar">
                    <div className="container">
                        {<div className="skills html" style={{ width: progressWidth }} >{progress}%</div>}
                    </div>
                </div>
            </section >
        )

    }

}