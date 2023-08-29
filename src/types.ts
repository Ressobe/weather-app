export type Weather = {
  city: string;
  wind_speed: number;
  pressure: number;
  visibility: number;
  air_quality: number;
  temp: number;
  humidity: number;
  description: string;
  sunrise: number;
  sunset: number;
  rain: number;
};

export type ForecastItem = {
  description: string;
  temp_min: number;
  temp_max: number;
};

export type Forecast = ForecastItem[];
