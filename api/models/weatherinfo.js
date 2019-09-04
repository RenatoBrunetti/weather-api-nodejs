module.exports = function() {
    // Get Weather info
    this.getWeatherInfo = (cityID, wList, info) => {
        const city = wList.filter( (wth) => {
            return wth.cityId === cityID
        })
        if(city.hasOwnProperty(key)){
            return city
        } else {
            return ''
        }
    }

    return this
}