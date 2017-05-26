// Generated by purs version 0.11.4
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_Class = require("../Control.Monad.Aff.Class");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class");
var Data_Array = require("../Data.Array");
var Data_Either = require("../Data.Either");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_Tuple = require("../Data.Tuple");
var Data_Tuple_Nested = require("../Data.Tuple.Nested");
var Data_Unit = require("../Data.Unit");
var Database_PostgreSQL = require("../Database.PostgreSQL");
var Hyper_Status = require("../Hyper.Status");
var Hyper_Trout_Router = require("../Hyper.Trout.Router");
var Scaffold = require("../Scaffold");
var Scaffold_Id = require("../Scaffold.Id");
var Scaffold_SQL = require("../Scaffold.SQL");
var Type_Trout = require("../Type.Trout");
var update = function (dictColumns) {
    return function (dictFromSQLRow) {
        return function (dictMonadAff) {
            return function (dictMonadThrow) {
                return function (dictTable) {
                    return function (dictToSQLRow) {
                        return function (conn) {
                            return function (id) {
                                return function (v) {
                                    if (v instanceof Data_Either.Left) {
                                        return Control_Monad_Error_Class.throwError(dictMonadThrow)(new Hyper_Trout_Router.HTTPError({
                                            status: Hyper_Status.status(422)("Unprocessable Entity"), 
                                            message: new Data_Maybe.Just("\"title\" is required")
                                        }));
                                    };
                                    if (v instanceof Data_Either.Right) {
                                        return Control_Bind.bind((dictMonadThrow.Monad0()).Bind1())(Control_Monad_Aff_Class.liftAff(dictMonadAff)(Database_PostgreSQL.query(Database_PostgreSQL.toSQLRowTuple(Scaffold_Id.toSQLValueId)(dictToSQLRow))(dictFromSQLRow)(conn)(Scaffold_SQL.update(dictColumns)(dictTable))(new Data_Tuple.Tuple(id, v.value0))))(function (v1) {
                                            var v2 = Data_Array.uncons(v1);
                                            if (v2 instanceof Data_Maybe.Nothing) {
                                                return Control_Monad_Error_Class.throwError(dictMonadThrow)(new Hyper_Trout_Router.HTTPError({
                                                    status: Hyper_Status.statusNotFound, 
                                                    message: new Data_Maybe.Just("Not Found")
                                                }));
                                            };
                                            if (v2 instanceof Data_Maybe.Just) {
                                                return Control_Applicative.pure((dictMonadThrow.Monad0()).Applicative0())(v2.value0.head);
                                            };
                                            throw new Error("Failed pattern match at Scaffold.Server line 139, column 5 - line 146, column 15: " + [ v2.constructor.name ]);
                                        });
                                    };
                                    throw new Error("Failed pattern match at Scaffold.Server line 131, column 18 - line 146, column 15: " + [ v.constructor.name ]);
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var $$new = function (dictApplicative) {
    return Control_Applicative.pure(dictApplicative)(Scaffold.New.value);
};
var index = function (dictFromSQLRow) {
    return function (dictMonadAff) {
        return function (dictTable) {
            return function (conn) {
                return Control_Monad_Aff_Class.liftAff(dictMonadAff)(Data_Functor.map(Control_Monad_Aff.functorAff)(Scaffold.Index)(Database_PostgreSQL.query(Database_PostgreSQL.toSQLRowUnit)(dictFromSQLRow)(conn)(Scaffold_SQL.index(dictTable))(Data_Unit.unit)));
            };
        };
    };
};
var get = function (dictFromSQLRow) {
    return function (dictMonadAff) {
        return function (dictMonadThrow) {
            return function (dictTable) {
                return function (conn) {
                    return function (id) {
                        return Control_Bind.bind((dictMonadThrow.Monad0()).Bind1())(Control_Monad_Aff_Class.liftAff(dictMonadAff)(Database_PostgreSQL.query(Scaffold_Id.toSQLRow)(dictFromSQLRow)(conn)(Scaffold_SQL.show(dictTable))(id)))(function (v) {
                            var v1 = Data_Array.uncons(v);
                            if (v1 instanceof Data_Maybe.Nothing) {
                                return Control_Monad_Error_Class.throwError(dictMonadThrow)(new Hyper_Trout_Router.HTTPError({
                                    status: Hyper_Status.statusNotFound, 
                                    message: new Data_Maybe.Just("Not Found")
                                }));
                            };
                            if (v1 instanceof Data_Maybe.Just) {
                                return Control_Applicative.pure((dictMonadThrow.Monad0()).Applicative0())(v1.value0.head);
                            };
                            throw new Error("Failed pattern match at Scaffold.Server line 79, column 3 - line 86, column 13: " + [ v1.constructor.name ]);
                        });
                    };
                };
            };
        };
    };
};
var destroy = function (dictFromSQLRow) {
    return function (dictMonadAff) {
        return function (dictMonadThrow) {
            return function (dictTable) {
                return function (conn) {
                    return function (id) {
                        return Data_Functor.map((((dictMonadThrow.Monad0()).Bind1()).Apply0()).Functor0())(Data_Newtype.wrap(Scaffold.newtypeDestroy))(Control_Bind.bind((dictMonadThrow.Monad0()).Bind1())(Control_Monad_Aff_Class.liftAff(dictMonadAff)(Database_PostgreSQL.query(Scaffold_Id.toSQLRow)(dictFromSQLRow)(conn)(Scaffold_SQL.destroy(dictTable))(id)))(function (v) {
                            var v1 = Data_Array.uncons(v);
                            if (v1 instanceof Data_Maybe.Nothing) {
                                return Control_Monad_Error_Class.throwError(dictMonadThrow)(new Hyper_Trout_Router.HTTPError({
                                    status: Hyper_Status.statusNotFound, 
                                    message: new Data_Maybe.Just("Not Found")
                                }));
                            };
                            if (v1 instanceof Data_Maybe.Just) {
                                return Control_Applicative.pure((dictMonadThrow.Monad0()).Applicative0())(v1.value0.head);
                            };
                            throw new Error("Failed pattern match at Scaffold.Server line 159, column 3 - line 166, column 12: " + [ v1.constructor.name ]);
                        }));
                    };
                };
            };
        };
    };
};
var crud = function (dictColumns) {
    return function (dictFromSQLRow) {
        return function (dictMonadAff) {
            return function (dictMonadThrow) {
                return function (dictTable) {
                    return function (dictToSQLRow) {
                        return function (conn) {
                            return function (fields) {
                                return function (id) {
                                    return new Type_Trout.AltE(new Type_Trout.AltE(new Type_Trout.AltE(Data_Functor.map((((dictMonadThrow.Monad0()).Bind1()).Apply0()).Functor0())(Data_Newtype.wrap(Scaffold.newtypeShow))(get(dictFromSQLRow)(dictMonadAff)(dictMonadThrow)(dictTable)(conn)(id)), Data_Functor.map((((dictMonadThrow.Monad0()).Bind1()).Apply0()).Functor0())(Data_Newtype.wrap(Scaffold.newtypeEdit))(get(dictFromSQLRow)(dictMonadAff)(dictMonadThrow)(dictTable)(conn)(id))), update(dictColumns)(dictFromSQLRow)(dictMonadAff)(dictMonadThrow)(dictTable)(dictToSQLRow)(conn)(id)(fields)), destroy(dictFromSQLRow)(dictMonadAff)(dictMonadThrow)(dictTable)(conn)(id));
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var create = function (dictColumns) {
    return function (dictFromSQLRow) {
        return function (dictMonadAff) {
            return function (dictMonadThrow) {
                return function (dictTable) {
                    return function (dictToSQLRow) {
                        return function (conn) {
                            return function (v) {
                                if (v instanceof Data_Either.Left) {
                                    return Control_Monad_Error_Class.throwError(dictMonadThrow)(new Hyper_Trout_Router.HTTPError({
                                        status: Hyper_Status.status(422)("Unprocessable Entity"), 
                                        message: new Data_Maybe.Just("\"title\" is required")
                                    }));
                                };
                                if (v instanceof Data_Either.Right) {
                                    return Control_Bind.bind((dictMonadThrow.Monad0()).Bind1())(Control_Monad_Aff_Class.liftAff(dictMonadAff)(Database_PostgreSQL.query(dictToSQLRow)(dictFromSQLRow)(conn)(Scaffold_SQL.create(dictColumns)(dictTable))(v.value0)))(function (v1) {
                                        var v2 = Data_Array.uncons(v1);
                                        if (v2 instanceof Data_Maybe.Nothing) {
                                            return Control_Monad_Error_Class.throwError(dictMonadThrow)(new Hyper_Trout_Router.HTTPError({
                                                status: Hyper_Status.statusNotFound, 
                                                message: new Data_Maybe.Just("Not Found")
                                            }));
                                        };
                                        if (v2 instanceof Data_Maybe.Just) {
                                            return Control_Applicative.pure((dictMonadThrow.Monad0()).Applicative0())(v2.value0.head);
                                        };
                                        throw new Error("Failed pattern match at Scaffold.Server line 110, column 5 - line 117, column 15: " + [ v2.constructor.name ]);
                                    });
                                };
                                throw new Error("Failed pattern match at Scaffold.Server line 102, column 15 - line 117, column 15: " + [ v.constructor.name ]);
                            };
                        };
                    };
                };
            };
        };
    };
};
var server = function (dictColumns) {
    return function (dictFromSQLRow) {
        return function (dictMonadAff) {
            return function (dictMonadThrow) {
                return function (dictTable) {
                    return function (dictToSQLRow) {
                        return function (conn) {
                            return function (fields) {
                                return new Type_Trout.AltE(new Type_Trout.AltE(new Type_Trout.AltE(index(dictFromSQLRow)(dictMonadAff)(dictTable)(conn), crud(dictColumns)(dictFromSQLRow)(dictMonadAff)(dictMonadThrow)(dictTable)(dictToSQLRow)(conn)(fields)), $$new((dictMonadThrow.Monad0()).Applicative0())), create(dictColumns)(dictFromSQLRow)(dictMonadAff)(dictMonadThrow)(dictTable)(dictToSQLRow)(conn)(fields));
                            };
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    create: create, 
    crud: crud, 
    destroy: destroy, 
    get: get, 
    index: index, 
    "new": $$new, 
    server: server, 
    update: update
};