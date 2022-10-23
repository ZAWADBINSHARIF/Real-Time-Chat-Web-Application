class DecorateHtmlResponse {

    constructor(page_title) {
        return function (_req, res, next) {
            res.locals.html = true;
            res.locals.title = `${page_title} - ${process.env.APP_NAME}`;
            next()
        }
    }
};



module.exports = DecorateHtmlResponse;