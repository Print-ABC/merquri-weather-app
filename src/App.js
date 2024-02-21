import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/search';
import CurrentWeather from './components/current-weather';
import SearchHistory from './components/search-history';
import { DEFAULT_SEARCH_QUERY, GetApiEndPoint } from './helpers';

function App() {
  // Store the search query: country or city
  const [searchQuery, setSearchQuery] = useState(DEFAULT_SEARCH_QUERY)
  // Store the weather data retrieved
  const [currWeatherData, setCurrWeatherData] = useState(null)
  // Store the search history
  const [history, setHistory] = useState([]);

  // Call fetch at 1st render using default search query
  useEffect(() => {
    fetchData()
  }, []) // Empty dependency to ensure fetch called here only once at start

  const addToHistory = (query, timestamp) => {
    setHistory([{ query, timestamp }, ...history]);
  };

  const removeFromHistory = (index) => {
    const updatedHistory = [...history];
    updatedHistory.splice(index, 1);
    setHistory(updatedHistory);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(GetApiEndPoint(searchQuery))
      const data = await response.json()
      setCurrWeatherData(data)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  return (
    <div className="container">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        startSearch={fetchData}
        addToSearchHistory={addToHistory}
      />
      <div className='weather-display-wrapper'>
        {currWeatherData && <CurrentWeather data={currWeatherData} />}
        <SearchHistory history={history} removeFromHistory={removeFromHistory} />
      </div>
    </div>
  );
}

export default App;
