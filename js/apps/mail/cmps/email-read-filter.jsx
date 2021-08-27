export class EmailReadFilter extends React.Component {
    state = {
       readFilter: 'all',
    }

    handleChange = (ev) => {
        const value = ev.target.value
        this.setState(prevState => ({ ...prevState, readFilter: value }), () => {
            this.props.onSetReadFilter(this.state.readFilter)
            console.log(this.state)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        console.log('filtering by read');
    }
    render() {
        const { readFilter } = this.state
        return (
            <div className="email-read-filter flex align-center" onSubmit={this.onFilter}>
                <div>
                <select name="filterByRead" id="filterByRead" className="read-unread-email-btn"
                value={readFilter}
                onChange={this.handleChange}> 
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">Unread</option>
                </select>

                    {/* <form className="search-form" action="">
                        <button className="search-btn">
                            <span className="fas fa-search"></span>
                        </button>

                        <input
                            className="search-input"
                            type="search"
                            name="txt"
                            id="searchFilter"
                            placeholder="Search"
                            value={readFilter}
                            onChange={this.handleChange} />
                    </form> */}
                </div>
            </div >
        )
    }

}
