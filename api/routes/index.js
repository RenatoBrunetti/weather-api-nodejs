module.exports = function(application) {
    application.get('/', (req, res) => {

        // Get Cities => reader JSON file
        const cityListJson = 'data/city_list.json'
        const citiesJson = application.api.models.reader()
        const citiesList = citiesJson.getJson(cityListJson)

        // Get Weather => reader JSON file
        const weatherListJson = 'data/weather_list.json'
        const weathersJson = application.api.models.reader()
        const weathersList = weathersJson.getJson(weatherListJson)

        // Render content
        res.render('./', {
            cities: citiesList,
            weather: weathersList
        })
        
    })
}