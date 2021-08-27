

export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            emailStatus: null,
        }
    }

    componentDidMount() {
        this.setState(prevState => (({...prevState, filterBy: {...prevState.filterBy, emailStatus: 'inbox'}})), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onChooseFilter = (ev) => {
        const value = ev.target.value;
        this.setState(prevState => (({...prevState, filterBy: {...prevState.filterBy, emailStatus: value}})), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }


    render() {

        return (
            <section className="email-side-filter">
                
                    <button value = "inbox" onClick = {this.onChooseFilter}>Inbox</button>
                    <button value = "starred" onClick = {this.onChooseFilter}>Starred</button>
                    <button value = "sent" onClick = {this.onChooseFilter}>Sent Mail</button>
                    <button value = "draft" onClick = {this.onChooseFilter}>Drafts</button>
                    <button value = "trash" onClick = {this.onChooseFilter}>Trash</button>
                    {this.state.filterBy.emailStatus === 
                    'trash' && 
                    <button className="clear-trash-btn" onClick = {this.props.onClearTrash}>
                        Clear Trash
                        </button>}
            </section >
        )

    }

}