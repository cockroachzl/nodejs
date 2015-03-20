/**
 * Created by zhangliang on 1/21/2015.
 */
'use strict';
var
    http    = require( 'http'    ),
    express = require( 'express' ),
    logger   = require('morgan'),
    bodyParser   = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorHandler'),
    serveStatic = require('serve-static'),
    app     = express(),
    server  = http.createServer( app );

if ('development' == app.get('env')) {
    app.use(logger());
    app.use(errorHandler({dumpExceptions:true, showStack:true}));
}
if ('production' == app.get('env')) {
    app.use(errorHandler());
}
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(serveStatic(__dirname + '/public'));
    //app.use(app.router);

app.get( '/', function ( request, response ) {
    response.redirect('/spa.html');
});

server.listen( 3000 );
console.log(
    'Express server listening on port %d in %s mode',
    server.address().port, app.settings.env
);
