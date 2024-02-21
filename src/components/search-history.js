import './search-history.css'

function SearchHistory({ history, removeFromHistory }) {
    
    const handleRemove = (index) => {
        removeFromHistory(index);
    };

    return (
        <div className="search-history">
            <header>Search History</header>
            {history.map((entry, index) => (
                <div className='history-item' key={index}>
                    <div className='history-item-left'>
                        <p>{entry.place}</p>
                    </div>
                    <div className='history-item-right'>
                        <p>{entry.timestamp}</p>
                        <button><img src='images/search-icon.png' alt='search'></img></button>
                        <button onClick={() => handleRemove(index)}><img src='images/trash-icon.png' alt='remove'></img></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SearchHistory;
