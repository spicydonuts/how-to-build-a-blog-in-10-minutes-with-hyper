// Generated by purs version 0.11.4
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Data_Array = require("../Data.Array");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Int = require("../Data.Int");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Data_String = require("../Data.String");
var Data_Tuple = require("../Data.Tuple");
var Data_URI_Common = require("../Data.URI.Common");
var Data_URI_Host = require("../Data.URI.Host");
var Data_URI_Types = require("../Data.URI.Types");
var Data_URI_UserInfo = require("../Data.URI.UserInfo");
var Global = require("../Global");
var Prelude = require("../Prelude");
var Text_Parsing_StringParser = require("../Text.Parsing.StringParser");
var Text_Parsing_StringParser_Combinators = require("../Text.Parsing.StringParser.Combinators");
var Text_Parsing_StringParser_String = require("../Text.Parsing.StringParser.String");
var printAuthority = function (v) {
    var printHostAndPort = function (v1) {
        return Data_URI_Host.printHost(v1.value0) + Data_Maybe.maybe("")(function (n) {
            return ":" + Data_Show.show(Data_Show.showInt)(n);
        })(v1.value1);
    };
    return "//" + (Data_Maybe.maybe("")(function (v1) {
        return v1 + "@";
    })(v.value0) + Data_String.joinWith(",")(Data_Functor.map(Data_Functor.functorArray)(printHostAndPort)(v.value1)));
};
var parsePort = Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Data_URI_Common.rxPat("[0-9]+"))(function (v) {
    var v1 = Data_Int.fromNumber(Global.readInt(10)(v));
    if (v1 instanceof Data_Maybe.Just) {
        return Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(v1.value0);
    };
    return Text_Parsing_StringParser.fail("Expected valid port number");
});
var parseAuthority = Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Text_Parsing_StringParser_Combinators.optionMaybe(Data_URI_UserInfo.parseUserInfo))(function (v) {
    return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Data_Function.flip(Text_Parsing_StringParser_Combinators.sepBy)(Text_Parsing_StringParser_String.string(","))(Control_Apply.apply(Text_Parsing_StringParser.applyParser)(Data_Functor.map(Text_Parsing_StringParser.functorParser)(Data_Tuple.Tuple.create)(Data_URI_Host.parseHost))(Text_Parsing_StringParser_Combinators.optionMaybe(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(Text_Parsing_StringParser_String.string(":"))(parsePort)))))(function (v1) {
        return Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(new Data_URI_Types.Authority(v, Data_Array.fromFoldable(Data_List_Types.foldableList)(v1)));
    });
});
module.exports = {
    parseAuthority: parseAuthority, 
    parsePort: parsePort, 
    printAuthority: printAuthority
};