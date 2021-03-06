// Generated by purs version 0.11.4
"use strict";
var Control_Comonad = require("../Control.Comonad");
var Control_Comonad_Env_Trans = require("../Control.Comonad.Env.Trans");
var Data_Tuple = require("../Data.Tuple");
var ComonadAsk = function (Comonad0, ask) {
    this.Comonad0 = Comonad0;
    this.ask = ask;
};
var ComonadEnv = function (ComonadAsk0, local) {
    this.ComonadAsk0 = ComonadAsk0;
    this.local = local;
};
var local = function (dict) {
    return dict.local;
};
var comonadAskTuple = new ComonadAsk(function () {
    return Data_Tuple.comonadTuple;
}, Data_Tuple.fst);
var comonadEnvTuple = new ComonadEnv(function () {
    return comonadAskTuple;
}, function (f) {
    return function (v) {
        return new Data_Tuple.Tuple(f(v.value0), v.value1);
    };
});
var comonadAskEnvT = function (dictComonad) {
    return new ComonadAsk(function () {
        return Control_Comonad_Env_Trans.comonadEnvT(dictComonad);
    }, function (v) {
        return Data_Tuple.fst(v);
    });
};
var comonadEnvEnvT = function (dictComonad) {
    return new ComonadEnv(function () {
        return comonadAskEnvT(dictComonad);
    }, function (f) {
        return function (v) {
            return new Data_Tuple.Tuple(f(v.value0), v.value1);
        };
    });
};
var ask = function (dict) {
    return dict.ask;
};
var asks = function (dictComonadEnv) {
    return function (f) {
        return function (x) {
            return f(ask(dictComonadEnv.ComonadAsk0())(x));
        };
    };
};
module.exports = {
    ComonadAsk: ComonadAsk, 
    ComonadEnv: ComonadEnv, 
    ask: ask, 
    asks: asks, 
    local: local, 
    comonadAskTuple: comonadAskTuple, 
    comonadEnvTuple: comonadEnvTuple, 
    comonadAskEnvT: comonadAskEnvT, 
    comonadEnvEnvT: comonadEnvEnvT
};
