// Generated by purs version 0.11.4
"use strict";
var Data_Array = require("../Data.Array");
var Data_Function = require("../Data.Function");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_String = require("../Data.String");
var Data_Unit = require("../Data.Unit");
var prettySignature = function (__copy_v) {
    var __tco_done = false;
    var __tco_result;
    function __tco_loop(v) {
        if (v instanceof Data_Generic.SigBoolean) {
            __tco_done = true;
            return "Boolean";
        };
        if (v instanceof Data_Generic.SigChar) {
            __tco_done = true;
            return "Char";
        };
        if (v instanceof Data_Generic.SigInt) {
            __tco_done = true;
            return "Int";
        };
        if (v instanceof Data_Generic.SigNumber) {
            __tco_done = true;
            return "Number";
        };
        if (v instanceof Data_Generic.SigString) {
            __tco_done = true;
            return "String";
        };
        if (v instanceof Data_Generic.SigUnit) {
            __tco_done = true;
            return "Unit";
        };
        if (v instanceof Data_Generic.SigArray) {
            __copy_v = v.value0(Data_Unit.unit);
            return;
        };
        if (v instanceof Data_Generic.SigRecord) {
            __tco_done = true;
            return "";
        };
        if (v instanceof Data_Generic.SigProd) {
            __tco_done = true;
            return Data_Maybe.fromMaybe(v.value0)(Data_Array.last(Data_String.split(Data_Newtype.wrap(Data_String.newtypePattern)("."))(v.value0)));
        };
        throw new Error("Failed pattern match at Scaffold.Generic line 12, column 19 - line 21, column 58: " + [ v.constructor.name ]);
    };
    while (!__tco_done) {
        __tco_result = __tco_loop(__copy_v);
    };
    return __tco_result;
};
module.exports = {
    prettySignature: prettySignature
};
