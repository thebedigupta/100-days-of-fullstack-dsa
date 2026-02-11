async function getWeather(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );
    if (!response.ok) {
      throw new Error(`Weather Fetching Failed : :${response.status}`);
    }
    const data = await response.json();
    const returnData = `Current Temperature : ${data.current_weather.temperature}°C  Wind Speed : ${data.current_weather.windspeed}km/h`;
    return returnData;
  } catch (error) {
    console.error('Error Message :', error.message);
    return 'Weather Data Unavaliable';
  }
}

// Test with New York coordinates

getWeather(40.71, -74.01).then((result) => {
  console.log(result);
});
