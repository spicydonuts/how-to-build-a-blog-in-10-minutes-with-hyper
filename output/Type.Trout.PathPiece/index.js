// Generated by purs version 0.11.4
"use strict";
var Control_Category = require("../Control.Category");
var Data_Either = require("../Data.Either");
var Data_Int = require("../Data.Int");
var Data_Maybe = require("../Data.Maybe");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var ToPathPiece = function (toPathPiece) {
    this.toPathPiece = toPathPiece;
};
var FromPathPiece = function (fromPathPiece) {
    this.fromPathPiece = fromPathPiece;
};
var toPathPieceString = new ToPathPiece(Control_Category.id(Control_Category.categoryFn));
var toPathPieceInt = new ToPathPiece(Data_Show.show(Data_Show.showInt));
var toPathPiece = function (dict) {
    return dict.toPathPiece;
};
var fromPathPieceString = new FromPathPiece(Data_Either.Right.create);
var fromPathPieceInt = new FromPathPiece(function (s) {
    var v = Data_Int.fromString(s);
    if (v instanceof Data_Maybe.Just) {
        return new Data_Either.Right(v.value0);
    };
    if (v instanceof Data_Maybe.Nothing) {
        return new Data_Either.Left("Invalid Int: " + s);
    };
    throw new Error("Failed pattern match at Type.Trout.PathPiece line 27, column 5 - line 29, column 44: " + [ v.constructor.name ]);
});
var fromPathPiece = function (dict) {
    return dict.fromPathPiece;
};
module.exports = {
    FromPathPiece: FromPathPiece, 
    ToPathPiece: ToPathPiece, 
    fromPathPiece: fromPathPiece, 
    toPathPiece: toPathPiece, 
    toPathPieceString: toPathPieceString, 
    toPathPieceInt: toPathPieceInt, 
    fromPathPieceString: fromPathPieceString, 
    fromPathPieceInt: fromPathPieceInt
};