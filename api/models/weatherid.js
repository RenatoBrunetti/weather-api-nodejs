module.exports = function() {

    // Find and get in Object Parameter only the CityID
    this.getCityID = (wList) => {
        const weatherListID = wList.map( (element) => {
            return element.cityId
        })
        return weatherListID
    }
    return this
}