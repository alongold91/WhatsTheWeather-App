import React, { useEffect, useState } from "react";
import { useGetCurrentWeatherQuery } from "../../global-state/rtk/rtk-query/api-slices/weather-api-slice/weatherApiSlice";
import { Box, Typography } from "@mui/material";
import SimpleList from "../../common-components/lists/simple-list/SimpleList";

interface Location {
  latitude?: number;
  longitude?: number;
  fallbackText?: string;
}

const listOfTexts = [
  "Checking out the temperature everywhere you need",
  "Checking out the weather forecast at any location",
  "Comparing the temperature at your chosen location comparing to the rest of the world",
  "Recommending certain activities you can do with the current/ predicted weather such as skiing or going to the beach",
  "Telling you where is the \"hot season\" right now (i.e where in the world the current weather is considered the best weather to visit)",
  "Helping you plan your vacation based on current/predicted weather",
  "Warning you if the weather at some location is too extreme",
  "Making a list of locations where you can always check the current temperature quickly"
]

const Home = () => {
  const [location, setLocation] = useState<Location>({
    latitude: undefined,
    longitude: undefined,
    fallbackText: undefined,
  });
  const [temperatureUnits, setTtemperatureUnits] = useState<
    "celsius" | "fahrenheit"
  >("celsius");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newLocation: Location = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        setLocation(newLocation);
      },
      (err) => {
        if (err.message === "User denied Geolocation") {
          setLocation({
            ...location,
            fallbackText:
              "We couldn't tell what is the current temperature at your location since you didn't let us access it",
          });
        } else {
          setLocation({
            ...location,
            fallbackText:
              "Something went wrong, we are really sorry. Please try our app again later",
          });
        }
      }
    );
  }, []);

  const { data, isLoading } = useGetCurrentWeatherQuery(
    {
      latitude: location.latitude ?? -1,
      longitude: location.longitude ?? -1,
      temperatureUnits,
    },
    { skip: !location.latitude || !location.longitude }
  );

  const SubHeader = () => {
    if (isLoading) {
      return <Typography variant="h5">Loading...</Typography>;
    } else if (Boolean(location.fallbackText)) {
      return <Typography variant="h5">{location.fallbackText}</Typography>;
    } else if (data) {
      if (temperatureUnits === "celsius") {
        return (
          <Typography variant="h5">
            The temperature at your location is {data}&#8451;
          </Typography>
        );
      } else {
        return (
          <Typography variant="h5">
            The temperature at your location is {data}&#8457;
          </Typography>
        );
      }
    }
    else return null
  };

  return (
    <Box
      display="flex"
      marginTop="10%"
      flexDirection="column"
      gap="12px"
      alignItems="center"
    >
      <Typography variant="h1">Welcome to WhatsTheWeather app</Typography>
      <SubHeader/>
      <Typography variant="h2">What else do we offer?</Typography>
      <SimpleList listTexts={listOfTexts}/>
    </Box>
  );
};
export default Home;
