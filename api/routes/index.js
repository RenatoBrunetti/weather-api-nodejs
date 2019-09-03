module.exports = function(application) {

    // Index Route
    application.get('/', (req, res) => {

        // Models - Get Cities => reader JSON file
        const cityListJson = 'data/city_list.json'
        const citiesJson = application.api.models.reader()
        const citiesList = citiesJson.getJson(cityListJson)

        // Models - Get Weather => reader JSON file
        const weatherListJson = 'data/weather_list.json'
        const weathersJson = application.api.models.reader()
        const weathersList = weathersJson.getJson(weatherListJson)

        // Models - Get CityID in Weather List Data
        const weatherCityID = application.api.models.weatherid()
        const weatherID = weatherCityID.getCityID(weathersList)

        // Models - Get only cities with weather
        const citiesWithWeather = application.api.models.citiesweather()
        const citiesWeather = citiesWithWeather.getCityWeather(citiesList, weatherID)

        // Render content
        res.render('./', {
            cities: citiesList,
            weather: weathersList,
            cityweather: citiesWeather
        })

    })
}