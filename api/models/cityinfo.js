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

    return this
}