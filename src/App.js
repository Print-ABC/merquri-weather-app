import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/search';
import CurrentWeather from './components/current-weather';
import { DEFAULT_SEARCH_QUERY, GetApiEndPoint } from './helpers';

function App() {
  // Store the search query: country or city
  const [searchQuery, setSearchQuery] = useState(DEFAULT_SEARCH_QUERY)
  // Store the weather data retrieved
  const [currWeatherData, setCurrWeatherData] = useState(null)

  // Call fetch at 1st render using default search query
  useEffect(() => {
    fetchData()
  }, []) // Empty dependency to ensure fetch called here only once at start

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
      <SearchBar setSearchQuery={setSearchQuery} startSearch={fetchData} />
      {currWeatherData && <CurrentWeather data={currWeatherData} />}
    </div>
  );
}

export default App;
