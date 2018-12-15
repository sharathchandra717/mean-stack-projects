# Request
**The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.** 
## req.app
This property holds a reference to the instance of the Express application that is using the middleware.
## req.baseUrl
The URL path on which a router instance was mounted.
## req.body
Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
## req.cookies
When using cookie-parser middleware, this property is an object that contains cookies sent by the request. If the request contains no cookies, it defaults to {}.
## req.fresh
Indicates whether the request is “fresh.” It is the opposite of req.stale.
## req.hostname
Contains the hostname derived from the Host HTTP header.
## req.ip
Contains the remote IP address of the request.
## req.ips
When the trust proxy setting does not evaluate to false, this property contains an array of IP addresses specified in the X-Forwarded-For request header. Otherwise, it contains an empty array. This header can be set by the client or by the proxy.
## req.method
Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.
## req.originalUrl
req.url is not a native Express property, it is inherited from Node’s http module.  
This property is much like req.url; however, it retains the original request URL, allowing you to rewrite req.url freely for internal routing purposes. For example, the “mounting” feature of app.use() will rewrite req.url to strip the mount point.
## req.params
This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
## req.path
Contains the path part of the request URL.
## req.protocol
Contains the request protocol string: either http or (for TLS requests) https.  
When the trust proxy setting does not evaluate to false, this property will use the value of the X-Forwarded-Proto header field if present. This header can be set by the client or by the proxy.
## req.query
This property is an object containing a property for each query string parameter in the route. If there is no query string, it is the empty object, {}.
## req.route
Contains the currently-matched route, a string. 
## req.secure
A Boolean property that is true if a TLS connection is established. 
## req.signedCookies
When using cookie-parser middleware, this property contains signed cookies sent by the request, unsigned and ready for use. Signed cookies reside in a different object to show developer intent; otherwise, a malicious attack could be placed on req.cookie values (which are easy to spoof). Note that signing a cookie does not make it “hidden” or encrypted; but simply prevents tampering (because the secret used to sign is private).
  
If no signed cookies are sent, the property defaults to {}.
## req.stale
Indicates whether the request is “stale,” and is the opposite of req.fresh. For more information, see req.fresh.
## req.subdomains
An array of subdomains in the domain name of the request.
## req.xhr
A Boolean property that is true if the request’s X-Requested-With header field is “XMLHttpRequest”, indicating that the request was issued by a client library such as jQuery.
