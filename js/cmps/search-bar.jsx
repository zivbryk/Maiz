export function SearchBar({ notes }) {
    return (
        <div className="search-bar flex align-center">
            <div>
                <form className="search-form" action="">
                    <button className="search-btn"><span className="fas fa-search"></span></button>
                    <input className="search-input" type="search" name="searchBar" id="searchBar" placeholder="Search" />
                </form>
            </div>
        </div>
    )
}
