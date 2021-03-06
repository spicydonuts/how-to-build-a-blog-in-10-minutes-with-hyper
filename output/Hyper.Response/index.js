// Generated by purs version 0.11.4
"use strict";
var Control_IxMonad = require("../Control.IxMonad");
var Data_Foldable = require("../Data.Foldable");
var Data_MediaType = require("../Data.MediaType");
var Data_Newtype = require("../Data.Newtype");
var Data_Tuple = require("../Data.Tuple");
var Hyper_Conn = require("../Hyper.Conn");
var Hyper_Header = require("../Hyper.Header");
var Hyper_Middleware = require("../Hyper.Middleware");
var Hyper_Status = require("../Hyper.Status");
var Prelude = require("../Prelude");
var Response = function (closeHeaders, end, send, writeHeader, writeStatus) {
    this.closeHeaders = closeHeaders;
    this.end = end;
    this.send = send;
    this.writeHeader = writeHeader;
    this.writeStatus = writeStatus;
};
var ResponseWritable = function (toResponse) {
    this.toResponse = toResponse;
};
var writeStatus = function (dict) {
    return dict.writeStatus;
};
var writeHeader = function (dict) {
    return dict.writeHeader;
};
var toResponse = function (dict) {
    return dict.toResponse;
};
var send = function (dict) {
    return dict.send;
};
var redirect = function (dictMonad) {
    return function (dictResponse) {
        return function (uri) {
            return Control_IxMonad.iapplySecond(Hyper_Middleware.ixMonadMiddleware(dictMonad))(writeStatus(dictResponse)(Hyper_Status.statusFound))(writeHeader(dictResponse)(new Data_Tuple.Tuple("Location", uri)));
        };
    };
};
var end = function (dict) {
    return dict.end;
};
var respond = function (dictMonad) {
    return function (dictResponseWritable) {
        return function (dictResponse) {
            return function (r) {
                return Control_IxMonad.iapplySecond(Hyper_Middleware.ixMonadMiddleware(dictMonad))(Control_IxMonad.ibind(Hyper_Middleware.ixMonadMiddleware(dictMonad))(toResponse(dictResponseWritable)(r))(send(dictResponse)))(end(dictResponse));
            };
        };
    };
};
var contentType = function (dictMonad) {
    return function (dictResponse) {
        return function (mediaType) {
            return writeHeader(dictResponse)(new Data_Tuple.Tuple("Content-Type", Data_Newtype.unwrap(Data_MediaType.newtypeMediaType)(mediaType)));
        };
    };
};
var closeHeaders = function (dict) {
    return dict.closeHeaders;
};
var headers = function (dictFoldable) {
    return function (dictMonad) {
        return function (dictResponse) {
            return function (hs) {
                return Control_IxMonad.iapplySecond(Hyper_Middleware.ixMonadMiddleware(dictMonad))(Data_Foldable.traverse_(Hyper_Middleware.applicativeMiddleware(dictMonad))(dictFoldable)(writeHeader(dictResponse))(hs))(closeHeaders(dictResponse));
            };
        };
    };
};
module.exports = {
    Response: Response, 
    ResponseWritable: ResponseWritable, 
    closeHeaders: closeHeaders, 
    contentType: contentType, 
    end: end, 
    headers: headers, 
    redirect: redirect, 
    respond: respond, 
    send: send, 
    toResponse: toResponse, 
    writeHeader: writeHeader, 
    writeStatus: writeStatus
};
