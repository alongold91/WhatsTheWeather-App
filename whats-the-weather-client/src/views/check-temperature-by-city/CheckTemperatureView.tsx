import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { ICountry, Timezones } from "country-state-city/lib/interface";

interface AutoCompleteFormat {
  label: string;
  value: string;
}

const CheckTemperatureView = () => {
  const [selectedCountry, setSelectedCountry] = useState<
    AutoCompleteFormat | undefined
  >(undefined);

  const [selectedCity, setSelectedCity] = useState<
    AutoCompleteFormat | undefined
  >(undefined);

  const countries = Country.getAllCountries();

  const cities = City.getCitiesOfCountry(selectedCountry?.value ?? "") ?? [];

  const updatedCountries: AutoCompleteFormat[] = countries.map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));

  const updatedCities: AutoCompleteFormat[] = cities.map((city) => ({
    label: city.name,
    value: `${city.name},${city.stateCode}`,
  }));

  const handleCountryChange = (
    event: React.ChangeEvent<{}>,
    value: AutoCompleteFormat | null
  ) => {
    if (value !== null) {
      setSelectedCountry(value);
      setSelectedCity(undefined);
    } else {
      setSelectedCountry(undefined);
      setSelectedCity(undefined);
    }
  };

  const handleCityChange = (
    event: React.ChangeEvent<{}>,
    value: AutoCompleteFormat | null
  ) => {
    if (value !== null) {
      setSelectedCity(value);
    }
  };

  const isOptionEqualToValue = (
    option: AutoCompleteFormat,
    value: AutoCompleteFormat
  ) => option.value === value.value;

  console.log(selectedCountry);
  console.log(selectedCity);

  return (
    <Box>
      <Typography variant="h2">
        Choose the desired location and the time frame you want to check the
        temperature for
      </Typography>
      <Autocomplete
        disablePortal
        id="country-select-element"
        options={updatedCountries}
        // value={}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select a country" />
        )}
        renderOption={(props, option) => (
          <Box
            component="li"
            key={option.value}
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.value.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.value.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} {option.value}
          </Box>
        )}
        isOptionEqualToValue={isOptionEqualToValue}
        onChange={handleCountryChange}
      />
      {selectedCountry && (
        <Autocomplete
          key={selectedCountry.value}
          disablePortal
          id="city-select-element"
          options={updatedCities}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select a city" />
          )}
          renderOption={(props, option) => (
            <Box component="li" {...props} key={option.value}>
              {option.label} {option.value}
            </Box>
          )}
          isOptionEqualToValue={isOptionEqualToValue}
          onChange={handleCityChange}
        />
      )}
    </Box>
  );
};

export default CheckTemperatureView;
