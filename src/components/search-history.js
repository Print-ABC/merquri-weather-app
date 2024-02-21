import './search-history.css'
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


function SearchHistory({ history, removeFromHistory, setInputValue, setSearchQuery, startSearch }) {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(history.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(history.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, history])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % history.length;
        setItemOffset(newOffset);
    }

    const handleRemove = (index) => {
        removeFromHistory(index)
    }

    const handleSearch = (name) => {
        setInputValue(name)
        setSearchQuery(name)
        startSearch()
    }

    return (
        <div className="search-history">
            <div>
                <header>Search History</header>
                {currentItems.map((entry, index) => (
                    <div className='history-item' key={index}>
                        <div className='history-item-left'>
                            <p>{entry.location}</p>
                        </div>
                        <div className='history-item-right'>
                            <p>{entry.timestamp}</p>
                            {/* Get weather data from this city */}
                            <button
                                onClick={() => handleSearch(entry.name)}
                            >
                                <img src='images/search-icon.png' alt='search'></img>
                            </button>
                            {/* Remove history item button */}
                            <button
                                onClick={() => handleRemove(index)}
                            >
                                <img src='images/trash-icon.png' alt='remove'></img>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </div>
    );
}

export default SearchHistory;
