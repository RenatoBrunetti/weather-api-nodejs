// Set Server Application Root
const application = require('../api/app')

// Set the prefered Server Port (Localhost)
const port = 3000

// Test the port and listen the local application
application.set('port', (process.eventNames.PORT || port))
application.listen(application.get('port'), () => {
    //console.log(`Server Ok - Porta: [${application.get('port')}]`)
})