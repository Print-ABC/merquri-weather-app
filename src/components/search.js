import './search.css'

const SearchBar = ({ inputValue, setInputValue, setSearchQuery, startSearch }) => {

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        setSearchQuery(e.target.value)
    };
    
    const handleOnClick = () => {
        // Call the api only if the input field is not empty
        inputValue && startSearch()
        setInputValue(''); // Clear the input field value after submitting
    }

    return (
        <div className='search-wrapper'>
            {/* Input bar */}
            <div className='input-wrapper'>
                <label>Country</label>
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => handleOnChange(e)}
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