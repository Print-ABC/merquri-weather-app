import './search.css'

const SearchBar = ({ setSearchQuery, startSearch }) => {
    return (
        <div className='search-wrapper'>
            {/* Input bar */}
            <div className='input-wrapper'>
                <label>Country</label>
                <input
                    type='text'
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            {/* Search button */}
            <button
                type='submit'
                onClick={startSearch}>
                <i className='gg-search'></i>
            </button>
        </div>
    )
}

export default SearchBar;