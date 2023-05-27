type TemperatureUnits = "celsius" | "fahrenheit";
export interface GetCurrentWeatherRequest {
  longitude: number;
  latitude: number;
  temperatureUnits: TemperatureUnits;
}

interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface CurrentWeatherDataResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather: CurrentWeather;
}
