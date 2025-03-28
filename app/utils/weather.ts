const getWeather = (location) => {
  // chose a random temperature and condition
  const randomTemperature = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
  const randomConditionIndex = Math.floor(Math.random() * 3);
  const conditions = ["Cloudy", "Sunny", "Windy"];

  return {
    location: location,
    temperature: randomTemperature,
    unit: "F",
    conditions: conditions[randomConditionIndex],
  };
};

export { getWeather };
