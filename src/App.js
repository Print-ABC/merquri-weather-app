import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/search';
import CurrentWeather from './components/current-weather';
import SearchHistory from './components/search-history';
import { DEFAULT_SEARCH_QUERY, GetApiEndPoint, GetCurrentTimeStamp } from './helpers';

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

  // Add an item to search history
  const addToHistory = (city, country, timestamp) => {
    const place =  `${city}, ${country}`
    setHistory([{ place, timestamp }, ...history]);
  };

  // Remove an item from search history
  const removeFromHistory = (index) => {
    const updatedHistory = [...history];
    updatedHistory.splice(index, 1);
    setHistory(updatedHistory);
  };

  // Get the current weather data
  const fetchData = async () => {
    try {
      const response = await fetch(GetApiEndPoint(searchQuery))
      const data = await response.json()
      setCurrWeatherData(data)
      addToHistory(data.name, data.sys.country, GetCurrentTimeStamp)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  return (
    <div className="container">
      {/* Search bar component */}
      <SearchBar
        setSearchQuery={setSearchQuery}
        startSearch={fetchData}
      />
      {/* Weather data display and search history component */}
      <div className='weather-display-wrapper'>
        {currWeatherData && <CurrentWeather data={currWeatherData} />}
        <SearchHistory history={history} removeFromHistory={removeFromHistory} />
      </div>
    </div>
  );
}

export default App;
