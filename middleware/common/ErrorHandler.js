const createError = require('http-errors');

class ErrorHandler {

    static notFoundHandler(req, res, next) {
        next(createError(404, "Your request content in not found"));
    }

    static defaultErrorHandler(err, req, res, next) {
        // send details error when development is enabled else sned error message
        res.locals.error = process.env.NODE_ENV.includes('development') ? err : { message: err.message };
        res.status(err.status || 500);

        // if res.locals.html then send html page else send json response
        res.locals.html
            ? res.render('error', {
                title: "Error page",
            })
            : res.json(res.locals.error);
    }
}

module.exports = ErrorHandler;