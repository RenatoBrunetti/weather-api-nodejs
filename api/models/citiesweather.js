module.exports = function() {

    // Compare the ID's and get only cities with weather
    this.getCityWeather = (cList, wID) => {
        const citiesWeather = cList.filter( (city) => {
            return wID.includes(city.id)
        })
        return citiesWeather
    }
    return this
}