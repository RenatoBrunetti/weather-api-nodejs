module.exports = function() {
    
    // Get city info
    this.getCityInfo = (cName, citiesList, info) => {
        const city = citiesList.filter( (city) => {
            const cityName = city.name.toLowerCase()
            return cityName === cName
        })

        if(info === 'id'){
            for(key in city){
                if(city.hasOwnProperty(key)){
                    const cityID = city[key].id
                    return cityID
                }
            }
        } else if(info === 'info'){
            return city
        }
    }

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