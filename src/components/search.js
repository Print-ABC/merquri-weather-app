import './search.css'

const SearchBar = ({ search, setSearch, onSearchChange }) => {

    const handleOnChange = (searchInput) => {
        setSearch(searchInput)
        onSearchChange(searchInput)
    }

    const searchPressed = () => {
        console.log(search)
    }

    return (
        <div className='search-wrapper'>
            {/* Input bar */}
            <div className='input-wrapper'>
                <label>Country</label>
                <input
                    type='text'
                    onChange={(e) => handleOnChange(e.target.value)}
                />
            </div>
            {/* Search button */}
            <button
                type='submit'
                onClick={searchPressed}>
                <i className='gg-search'></i>
            </button>
        </div>
    )
}

export default SearchBar;