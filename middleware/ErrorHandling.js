// Creating a error handling middleware: to handle any potential error we might encounter when running the server.
function errorHandling(err, req, res, next ) {
    if(err || res.statusCode >= 400) {
        res.json({
            statusCode: err.status || res.
            statusCode || 500, 
            msg: 'Apologies, there seems to be an error in the server. Please try again later.'
        })
    }else {
        next()
    }
}
export {
    errorHandling
}