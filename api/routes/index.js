module.exports = function(application) {

    // Index Route
    application.get('/', (req, res, next) => {
        res.render('./')
    })

    const pagePath = (req, res) => {
        const pageParam = req.params.page
        const perPage = 10
        const page = pageParam || 1
        const pathPage = pageParam !== '' ? '../' : ''
        return pathPage
    }

    const pageList = (req, res) => {
        
        const pathPage = pagePath(req, res)

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

        res.render('./list', {
            pathpage: pathPage,
            cities: citiesList,
            weather: weathersList,
            weatherid: weatherID,
            cityweather: citiesWeather
        })
    }

    // List
    application.get('/list', (req, res, next) => {
        pageList(req, res)
    })
    application.get('/list/:page', (req, res, next) => {
        pageList(req, res)
    })

    // City Information
    application.get('/city/:name/', (req, res) => {
        
        const pathPage = pagePath(req, res)

        const cityName = req.params.name

        // Models - Get Cities => reader JSON file
        const cityListJson = 'data/city_list.json'
        const citiesJson = application.api.models.reader()
        const citiesList = citiesJson.getJson(cityListJson)

        // Models - Get Weather => reader JSON file
        const weatherListJson = 'data/weather_list.json'
        const weathersJson = application.api.models.reader()
        const weathersList = weathersJson.getJson(weatherListJson)

        // Models - Get city ID using city Name
        const cityFind = application.api.models.cityinfo(citiesList)
        const cityID = cityFind.getCityInfo(cityName, citiesList, 'id')
        const cityInfo = cityFind.getCityInfo(cityName, citiesList, 'info')

        // Render content
        res.render('./city', {
            pathpage: pathPage,
            cities: citiesList,
            weather: weathersList,
            cityid: cityID,
            cityinfo: cityInfo
        })
    })
}