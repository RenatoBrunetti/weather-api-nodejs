module.exports = function() {

    this.getSortCities = (citiesList) => {

        citiesList.sort((a, b) => {
            return (a.coord.lon > b.coord.lon) ? -1 : 1
        })
        console.log(citiesList)

        return citiesList
    }

    return this
}