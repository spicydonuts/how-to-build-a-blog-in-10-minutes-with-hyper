"use strict";
var Control_Alt = require("../Control.Alt");
var Control_Apply = require("../Control.Apply");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Either = require("../Data.Either");
var Data_Functor = require("../Data.Functor");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_Monoid = require("../Data.Monoid");
var Data_Newtype = require("../Data.Newtype");
var Data_Show = require("../Data.Show");
var Data_Tuple_Nested = require("../Data.Tuple.Nested");
var Data_Unit = require("../Data.Unit");
var Database_PostgreSQL = require("../Database.PostgreSQL");
var Scaffold_Destroy = require("../Scaffold.Destroy");
var Scaffold_Edit = require("../Scaffold.Edit");
var Scaffold_Field = require("../Scaffold.Field");
var Scaffold_New = require("../Scaffold.New");
var Scaffold_Show = require("../Scaffold.Show");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var Type_Trout_ContentType_HTML = require("../Type.Trout.ContentType.HTML");
var Type_Trout_PathPiece = require("../Type.Trout.PathPiece");
var Id = function (x) {
    return x;
};
var GetId = function (getId) {
    this.getId = getId;
};
var newtypeId = new Data_Newtype.Newtype(function (n) {
    return n;
}, Id);
var toPathPieceId = new Type_Trout_PathPiece.ToPathPiece(function ($16) {
    return Type_Trout_PathPiece.toPathPiece(Type_Trout_PathPiece.toPathPieceInt)(Data_Newtype.unwrap(newtypeId)($16));
});
var toSQLValueId = new Database_PostgreSQL.ToSQLValue(function ($17) {
    return Database_PostgreSQL.toSQLValue(Database_PostgreSQL.toSQLValueInt)(Data_Newtype.unwrap(newtypeId)($17));
});
var toSQLRow = new Database_PostgreSQL.ToSQLRow(function ($18) {
    return Database_PostgreSQL.toSQLRow(Database_PostgreSQL.toSQLRowTuple(toSQLValueId)(Database_PostgreSQL.toSQLRowUnit))(Data_Tuple_Nested.tuple1($18));
});
var getId = function (dict) {
    return dict.getId;
};
var genericId = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Scaffold.Id.Id" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Id))(Data_Generic.fromSpine(Data_Generic.genericInt)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Scaffold.Id.Id", [ {
        sigConstructor: "Scaffold.Id.Id", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericInt)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("Scaffold.Id.Id", [ function ($dollarq) {
        return Data_Generic.toSpine(Data_Generic.genericInt)(v);
    } ]);
});
var showId = new Data_Show.Show(Data_Generic.gShow(genericId));
var fromSQLValueId = new Database_PostgreSQL.FromSQLValue(function ($19) {
    return Data_Functor.map(Data_Either.functorEither)(Data_Newtype.wrap(newtypeId))(Database_PostgreSQL.fromSQLValue(Database_PostgreSQL.fromSQLValueInt)($19));
});
var fromPathPieceId = new Type_Trout_PathPiece.FromPathPiece(function ($20) {
    return Data_Functor.map(Data_Either.functorEither)(Data_Newtype.wrap(newtypeId))(Type_Trout_PathPiece.fromPathPiece(Type_Trout_PathPiece.fromPathPieceInt)($20));
});
var encodeShowId = new Scaffold_Show.EncodeShow(function (v) {
    return Data_Monoid.mempty(Text_Smolder_Markup.monoidMarkup);
});
var encodeNewId = new Scaffold_New.EncodeNew(function (v) {
    return Data_Monoid.mempty(Text_Smolder_Markup.monoidMarkup);
});
var encodeHTMLId = new Type_Trout_ContentType_HTML.EncodeHTML(function ($21) {
    return Text_Smolder_Markup.text(Data_Show.show(Data_Show.showInt)(Data_Newtype.unwrap(newtypeId)($21)));
});
var encodeFieldId = new Scaffold_Field.EncodeField(Type_Trout_ContentType_HTML.encodeHTML(encodeHTMLId));
var encodeEditId = new Scaffold_Edit.EncodeEdit(function (v) {
    return Data_Monoid.mempty(Text_Smolder_Markup.monoidMarkup);
});
var encodeDestroyId = new Scaffold_Destroy.EncodeDestroy(function (v) {
    return Data_Monoid.mempty(Text_Smolder_Markup.monoidMarkup);
});
module.exports = {
    Id: Id, 
    GetId: GetId, 
    getId: getId, 
    genericId: genericId, 
    newtypeId: newtypeId, 
    showId: showId, 
    fromSQLValueId: fromSQLValueId, 
    toSQLRow: toSQLRow, 
    toSQLValueId: toSQLValueId, 
    fromPathPieceId: fromPathPieceId, 
    encodeDestroyId: encodeDestroyId, 
    encodeEditId: encodeEditId, 
    encodeFieldId: encodeFieldId, 
    encodeHTMLId: encodeHTMLId, 
    encodeNewId: encodeNewId, 
    encodeShowId: encodeShowId, 
    toPathPieceId: toPathPieceId
};