// Generated by purs version 0.11.4
"use strict";
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_CatList = require("../Data.CatList");
var Data_Functor = require("../Data.Functor");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_StrMap = require("../Data.StrMap");
var Data_Tuple = require("../Data.Tuple");
var Prelude = require("../Prelude");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var Element = (function () {
    function Element(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Element.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Element(value0, value1, value2, value3);
                };
            };
        };
    };
    return Element;
})();
var Text = (function () {
    function Text(value0) {
        this.value0 = value0;
    };
    Text.create = function (value0) {
        return new Text(value0);
    };
    return Text;
})();
var renderAttrs = (function () {
    var toTuple = function (v) {
        return new Data_Tuple.Tuple(v.value0, v.value1);
    };
    return function ($20) {
        return Data_StrMap.fromFoldable(Data_CatList.foldableCatList)(Data_Functor.map(Data_CatList.functorCatList)(toTuple)($20));
    };
})();
var renderMarkup = function (v) {
    if (v instanceof Text_Smolder_Markup.Element && v.value1 instanceof Data_Maybe.Just) {
        return new Data_List_Types.Cons(new Element(v.value0, renderAttrs(v.value2), v.value3, renderMarkup(v.value1.value0)), renderMarkup(v.value4));
    };
    if (v instanceof Text_Smolder_Markup.Element && v.value1 instanceof Data_Maybe.Nothing) {
        return new Data_List_Types.Cons(new Element(v.value0, renderAttrs(v.value2), v.value3, Data_List_Types.Nil.value), renderMarkup(v.value4));
    };
    if (v instanceof Text_Smolder_Markup.Content) {
        return new Data_List_Types.Cons(new Text(v.value0), renderMarkup(v.value1));
    };
    if (v instanceof Text_Smolder_Markup.Return) {
        return Data_List_Types.Nil.value;
    };
    throw new Error("Failed pattern match at Text.Smolder.Renderer.Util line 20, column 1 - line 21, column 86: " + [ v.constructor.name ]);
};
module.exports = {
    Element: Element, 
    Text: Text, 
    renderMarkup: renderMarkup
};
