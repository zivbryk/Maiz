export class EmailSort extends React.Component {
    state = {
       sortBy: 'date',
    }

    handleChange = (ev) => {
        const value = ev.target.value
        this.setState(prevState => ({ ...prevState, sortBy: value }), () => {
            this.props.onDateAlphaSort(this.state.sortBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        console.log(this.state);
    }
    render() {
        const { sortBy } = this.state
        return (
            <div className="email-sort flex align-center" onSubmit={this.onFilter}>
                <div>
                <select name="email-sort" id="email-sort" className="read-unread-email-btn"
                value={sortBy}
                onChange={this.handleChange}> 
                    <option value="date">Date</option>
                    <option value="abc">ABC</option>

                </select>

                </div>
            </div >
        )
    }

}
