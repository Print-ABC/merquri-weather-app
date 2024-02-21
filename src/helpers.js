const API_KEY = 'ecf32d84311243a895766cd81f14a6e2'
const UNIT = 'metric'

export const DEFAULT_SEARCH_QUERY = 'Singapore'

export const GetApiEndPoint= (searchData) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=${API_KEY}&units=${UNIT}`
}

export function GetCurrentTimeStamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const meridiem = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    return `${day}-${month}-${year} ${formattedHours}:${minutes}${meridiem}`;
}

export function RoundNearestWholeNum(value) {
    return Math.round(value);
}
