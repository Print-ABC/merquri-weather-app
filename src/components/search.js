import './search.css'

const SearchBar = ({ setSearchQuery, startSearch }) => {
    
    const handleOnClick = () => {
        // Send api request call
        startSearch()
    }

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
                onClick={handleOnClick}>
                <i className='gg-search'></i>
            </button>
        </div>
    )
}

export default SearchBar;