// Generated by purs version 0.11.4
"use strict";
var Control_Alt = require("../Control.Alt");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Either = require("../Data.Either");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Semigroup = require("../Data.Semigroup");
var Data_String_Regex = require("../Data.String.Regex");
var Data_String_Regex_Flags = require("../Data.String.Regex.Flags");
var Data_Tuple = require("../Data.Tuple");
var Data_URI_Common = require("../Data.URI.Common");
var Data_URI_Types = require("../Data.URI.Types");
var Global = require("../Global");
var Partial_Unsafe = require("../Partial.Unsafe");
var Prelude = require("../Prelude");
var Text_Parsing_StringParser = require("../Text.Parsing.StringParser");
var Text_Parsing_StringParser_Combinators = require("../Text.Parsing.StringParser.Combinators");
var Text_Parsing_StringParser_String = require("../Text.Parsing.StringParser.String");
var rgxSpace = Data_Either.fromRight()(Data_String_Regex.regex("%20")(Data_String_Regex_Flags.global));
var rgxPlus = Data_Either.fromRight()(Data_String_Regex.regex("\\+")(Data_String_Regex_Flags.global));
var prettyEncodeURI = function ($16) {
    return Data_String_Regex.replace(rgxSpace)("+")(Global["encodeURIComponent"]($16));
};
var printQuery = function (v) {
    var printPart = function (v1) {
        if (v1.value1 instanceof Data_Maybe.Nothing) {
            return prettyEncodeURI(v1.value0);
        };
        if (v1.value1 instanceof Data_Maybe.Just) {
            return prettyEncodeURI(v1.value0) + ("=" + prettyEncodeURI(v1.value1.value0));
        };
        throw new Error("Failed pattern match at Data.URI.Query line 48, column 3 - line 48, column 50: " + [ v1.constructor.name ]);
    };
    if (v instanceof Data_List_Types.Nil) {
        return "";
    };
    return "?" + Data_URI_Common.joinWith("&")(Data_Functor.map(Data_List_Types.functorList)(printPart)(v));
};
var prettyDecodeURI = function ($17) {
    return Global["decodeURIComponent"](Data_String_Regex.replace(rgxPlus)(" ")($17));
};
var parsePart = Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Data_URI_Common.rxPat("[^=;&]+"))(function (v) {
    return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Text_Parsing_StringParser_Combinators.optionMaybe(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(Text_Parsing_StringParser_String.string("="))(Data_URI_Common.rxPat("[^;&]*"))))(function (v1) {
        return Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(new Data_Tuple.Tuple(prettyDecodeURI(v), Data_Functor.map(Data_Maybe.functorMaybe)(prettyDecodeURI)(v1)));
    });
});
var parseParts = Text_Parsing_StringParser_Combinators.sepBy(parsePart)(Control_Alt.alt(Text_Parsing_StringParser.altParser)(Text_Parsing_StringParser_String.string(";"))(Text_Parsing_StringParser_String.string("&")));
var parseQuery = Data_Functor.map(Text_Parsing_StringParser.functorParser)(Data_URI_Types.Query)(Data_URI_Common.wrapParser(parseParts)(Text_Parsing_StringParser["try"](Data_Functor.map(Text_Parsing_StringParser.functorParser)(Data_URI_Common.joinWith(""))(Text_Parsing_StringParser_Combinators.many(Control_Alt.alt(Text_Parsing_StringParser.altParser)(Control_Alt.alt(Text_Parsing_StringParser.altParser)(Data_URI_Common.parsePChar)(Text_Parsing_StringParser_String.string("/")))(Text_Parsing_StringParser_String.string("?")))))));
module.exports = {
    parseQuery: parseQuery, 
    printQuery: printQuery
};