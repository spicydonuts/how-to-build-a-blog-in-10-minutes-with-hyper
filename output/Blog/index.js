// Generated by purs version 0.11.4
"use strict";
var Control_Bind = require("../Control.Bind");
var Control_IxMonad = require("../Control.IxMonad");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_Class = require("../Control.Monad.Aff.Class");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Unit = require("../Data.Unit");
var Database_PostgreSQL = require("../Database.PostgreSQL");
var Hyper_Conn = require("../Hyper.Conn");
var Hyper_Middleware = require("../Hyper.Middleware");
var Hyper_Node_Server = require("../Hyper.Node.Server");
var Hyper_Response = require("../Hyper.Response");
var Hyper_Status = require("../Hyper.Status");
var Node_HTTP = require("../Node.HTTP");
var poolConfiguration = {
    database: "blog", 
    host: "localhost", 
    idleTimeoutMillis: 600000, 
    max: 100, 
    password: "", 
    port: 5432, 
    user: "blog"
};
var main = (function () {
    var server = Control_IxMonad.iapplySecond(Hyper_Middleware.ixMonadMiddleware(Control_Monad_Aff.monadAff))(Control_IxMonad.iapplySecond(Hyper_Middleware.ixMonadMiddleware(Control_Monad_Aff.monadAff))(Hyper_Response.writeStatus(Hyper_Node_Server.responseWriterHttpResponse(Control_Monad_Aff_Class.monadAffAff))(Hyper_Status.statusOK))(Hyper_Response.closeHeaders(Hyper_Node_Server.responseWriterHttpResponse(Control_Monad_Aff_Class.monadAffAff))))(Hyper_Response.respond(Control_Monad_Aff.monadAff)(Hyper_Node_Server.stringNodeResponse(Control_Monad_Aff_Class.monadAffAff))(Hyper_Node_Server.responseWriterHttpResponse(Control_Monad_Aff_Class.monadAffAff))("Hello LambdaConf!"));
    return Data_Functor["void"](Control_Monad_Eff.functorEff)(Control_Monad_Aff.launchAff(Control_Bind.bind(Control_Monad_Aff.bindAff)(Database_PostgreSQL.newPool(poolConfiguration))(function (v) {
        return Database_PostgreSQL.withConnection(v)(function (conn) {
            return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Hyper_Node_Server.runServer(Hyper_Node_Server.defaultOptionsWithLogging)({})(server));
        });
    })));
})();
module.exports = {
    main: main, 
    poolConfiguration: poolConfiguration
};
