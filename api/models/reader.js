// Set Read File Sync
const fs = require('fs')

module.exports = function() {

    // Get Json reader function
    this.getJson = (fileJson) => {
        const readFile = fs.readFileSync(fileJson)
        const parseFile = JSON.parse(readFile)
        return parseFile
    }

    return this
}