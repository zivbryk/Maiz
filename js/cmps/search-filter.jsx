export class SearchFilter extends React.Component {
    state = {
        filterBy: {
            txt: ''
        }
    }

    handleChange = (ev) => {
        // console.log(ev.target.value)
        const field = ev.target.name
        const value = ev.target.type === 'number' ? + ev.target.value : ev.target.value
        this.setState(prevState => ({ ...prevState, filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onFilter = () => {
        //
    }
    render() {
        const { txt } = this.state.filterBy
        return (
            <div className="search-filter flex align-center" onSubmit={this.onFilter}>
                <div>
                    <form className="search-form" action="">
                        <button className="search-btn">
                            <span className="fas fa-search"></span>
                        </button>

                        <input
                            className="search-input"
                            type="search"
                            name="txt"
                            id="searchFilter"
                            placeholder="Search"
                            value={txt}
                            onChange={this.handleChange} />
                    </form>
                </div>
            </div >
        )
    }

}
