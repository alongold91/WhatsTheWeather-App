import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CurrentWeatherDataResponse,
  GetCurrentWeatherRequest,
} from "./weatherApiSliceModel";

export const weatherApiSlice = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.open-meteo.com/v1" }),
  // tagTypes: []
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<number, GetCurrentWeatherRequest>({
      query: ({
        latitude,
        longitude,
        temperatureUnits = "celsius",
      }: GetCurrentWeatherRequest) =>
        `/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=${temperatureUnits}`,
      transformResponse: (response: CurrentWeatherDataResponse) =>
        response.current_weather.temperature,
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = weatherApiSlice;
