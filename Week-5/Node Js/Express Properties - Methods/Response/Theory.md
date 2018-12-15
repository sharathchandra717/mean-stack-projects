# Response
**The res object represents the HTTP response that an Express app sends when it gets an HTTP request.**
## res.app
This property holds a reference to the instance of the Express application that is using the middleware.
## res.headersSent
Boolean property that indicates if the app sent HTTP headers for the response.
## res.locals
An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.
