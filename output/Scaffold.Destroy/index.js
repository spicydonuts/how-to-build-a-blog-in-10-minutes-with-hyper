"use strict";
var Control_Bind = require("../Control.Bind");
var Data_Function = require("../Data.Function");
var Data_Monoid = require("../Data.Monoid");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Text_Smolder_HTML = require("../Text.Smolder.HTML");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var Destroy = function (x) {
    return x;
};
var EncodeDestroy = function (encodeDestroy) {
    this.encodeDestroy = encodeDestroy;
};
var encodeDestroyUnit = new EncodeDestroy(function (v) {
    return Data_Monoid.mempty(Text_Smolder_Markup.monoidMarkup);
});
var encodeDestroy = function (dict) {
    return dict.encodeDestroy;
};
var encodeDestroyTuple = function (dictEncodeDestroy) {
    return function (dictEncodeDestroy1) {
        return new EncodeDestroy(function (v) {
            return Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(Text_Smolder_HTML.div(encodeDestroy(dictEncodeDestroy)(v.value0)))(function () {
                return encodeDestroy(dictEncodeDestroy1)(v.value1);
            });
        });
    };
};
module.exports = {
    Destroy: Destroy, 
    EncodeDestroy: EncodeDestroy, 
    encodeDestroy: encodeDestroy, 
    encodeDestroyUnit: encodeDestroyUnit, 
    encodeDestroyTuple: encodeDestroyTuple
};