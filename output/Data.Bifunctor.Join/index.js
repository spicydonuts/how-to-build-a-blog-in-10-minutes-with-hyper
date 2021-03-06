// Generated by purs version 0.11.4
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Biapplicative = require("../Control.Biapplicative");
var Control_Biapply = require("../Control.Biapply");
var Data_Bifunctor = require("../Data.Bifunctor");
var Data_Eq = require("../Data.Eq");
var Data_Functor = require("../Data.Functor");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Prelude = require("../Prelude");
var Join = function (x) {
    return x;
};
var showJoin = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Join " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var ordJoin = function (dictOrd) {
    return dictOrd;
};
var newtypeJoin = new Data_Newtype.Newtype(function (n) {
    return n;
}, Join);
var eqJoin = function (dictEq) {
    return dictEq;
};
var bifunctorJoin = function (dictBifunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return Data_Bifunctor.bimap(dictBifunctor)(f)(f)(v);
        };
    });
};
var biapplyJoin = function (dictBiapply) {
    return new Control_Apply.Apply(function () {
        return bifunctorJoin(dictBiapply.Bifunctor0());
    }, function (v) {
        return function (v1) {
            return Control_Biapply.biapply(dictBiapply)(v)(v1);
        };
    });
};
var biapplicativeJoin = function (dictBiapplicative) {
    return new Control_Applicative.Applicative(function () {
        return biapplyJoin(dictBiapplicative.Biapply0());
    }, function (a) {
        return Control_Biapplicative.bipure(dictBiapplicative)(a)(a);
    });
};
module.exports = {
    Join: Join, 
    newtypeJoin: newtypeJoin, 
    eqJoin: eqJoin, 
    ordJoin: ordJoin, 
    showJoin: showJoin, 
    bifunctorJoin: bifunctorJoin, 
    biapplyJoin: biapplyJoin, 
    biapplicativeJoin: biapplicativeJoin
};
