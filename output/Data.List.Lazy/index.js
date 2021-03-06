// Generated by purs version 0.11.4
"use strict";
var Control_Alt = require("../Control.Alt");
var Control_Alternative = require("../Control.Alternative");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Lazy = require("../Control.Lazy");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Boolean = require("../Data.Boolean");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Lazy = require("../Data.Lazy");
var Data_List_Lazy_Types = require("../Data.List.Lazy.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_NonEmpty = require("../Data.NonEmpty");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Traversable = require("../Data.Traversable");
var Data_Tuple = require("../Data.Tuple");
var Data_Unfoldable = require("../Data.Unfoldable");
var Prelude = require("../Prelude");
var zipWith = function (f) {
    return function (xs) {
        return function (ys) {
            var go = function (v) {
                return function (v1) {
                    if (v instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v instanceof Data_List_Lazy_Types.Cons && v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(f(v.value0)(v1.value0), zipWith(f)(v.value1)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy line 651, column 3 - line 651, column 17: " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Control_Apply.apply(Data_Lazy.applyLazy)(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs)))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(ys));
        };
    };
};
var zipWithA = function (dictApplicative) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return Data_Traversable.sequence(Data_List_Lazy_Types.traversableList)(dictApplicative)(zipWith(f)(xs)(ys));
            };
        };
    };
};
var zip = zipWith(Data_Tuple.Tuple.create);
var updateAt = function (n) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(x, v1.value1);
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(v1.value0, updateAt(v - 1 | 0)(x)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy line 363, column 3 - line 363, column 17: " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var unzip = Data_Foldable.foldr(Data_List_Lazy_Types.foldableList)(function (v) {
    return function (v1) {
        return new Data_Tuple.Tuple(Data_List_Lazy_Types.cons(v.value0)(v1.value0), Data_List_Lazy_Types.cons(v.value1)(v1.value1));
    };
})(new Data_Tuple.Tuple(Data_List_Lazy_Types.nil, Data_List_Lazy_Types.nil));
var uncons = function (xs) {
    var v = Data_List_Lazy_Types.step(xs);
    if (v instanceof Data_List_Lazy_Types.Nil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_List_Lazy_Types.Cons) {
        return new Data_Maybe.Just({
            head: v.value0, 
            tail: v.value1
        });
    };
    throw new Error("Failed pattern match at Data.List.Lazy line 281, column 13 - line 283, column 44: " + [ v.constructor.name ]);
};
var toUnfoldable = function (dictUnfoldable) {
    return Data_Unfoldable.unfoldr(dictUnfoldable)(function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (rec) {
            return new Data_Tuple.Tuple(rec.head, rec.tail);
        })(uncons(xs));
    });
};
var takeWhile = function (p) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Cons && p(v.value0)) {
            return new Data_List_Lazy_Types.Cons(v.value0, takeWhile(p)(v.value1));
        };
        return Data_List_Lazy_Types.Nil.value;
    };
    return function ($200) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($200)));
    };
};
var take = function (n) {
    var go = function (v) {
        return function (v1) {
            if (v <= 0) {
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v1 instanceof Data_List_Lazy_Types.Nil) {
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v1 instanceof Data_List_Lazy_Types.Cons) {
                return new Data_List_Lazy_Types.Cons(v1.value0, take(v - 1 | 0)(v1.value1));
            };
            throw new Error("Failed pattern match at Data.List.Lazy line 484, column 3 - line 484, column 24: " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
    return function ($201) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($201)));
    };
};
var tail = function (xs) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return v.tail;
    })(uncons(xs));
};
var span = function (p) {
    return function (xs) {
        var v = uncons(xs);
        if (v instanceof Data_Maybe.Just && p(v.value0.head)) {
            var v1 = span(p)(v.value0.tail);
            return {
                init: Data_List_Lazy_Types.cons(v.value0.head)(v1.init), 
                rest: v1.rest
            };
        };
        return {
            init: Data_List_Lazy_Types.nil, 
            rest: xs
        };
    };
};
var snoc = function (xs) {
    return function (x) {
        return Data_Foldable.foldr(Data_List_Lazy_Types.foldableList)(Data_List_Lazy_Types.cons)(Data_List_Lazy_Types.cons(x)(Data_List_Lazy_Types.nil))(xs);
    };
};
var singleton = function (a) {
    return Data_List_Lazy_Types.cons(a)(Data_List_Lazy_Types.nil);
};
var reverse = function (xs) {
    return Control_Lazy.defer(Data_List_Lazy_Types.lazyList)(function (v) {
        return Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip(Data_List_Lazy_Types.cons))(Data_List_Lazy_Types.nil)(xs);
    });
};
var replicateM = function (dictMonad) {
    return function (n) {
        return function (m) {
            if (n < 1) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.nil);
            };
            if (Data_Boolean.otherwise) {
                return Control_Bind.bind(dictMonad.Bind1())(m)(function (v) {
                    return Control_Bind.bind(dictMonad.Bind1())(replicateM(dictMonad)(n - 1 | 0)(m))(function (v1) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.cons(v)(v1));
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List.Lazy line 158, column 1 - line 163, column 23: " + [ n.constructor.name, m.constructor.name ]);
        };
    };
};
var repeat = function (x) {
    return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (xs) {
        return Data_List_Lazy_Types.cons(x)(xs);
    });
};
var replicate = function (i) {
    return function (xs) {
        return take(i)(repeat(xs));
    };
};
var range = function (start) {
    return function (end) {
        if (start > end) {
            var g = function (x) {
                if (x >= end) {
                    return new Data_Maybe.Just(new Data_Tuple.Tuple(x, x - 1 | 0));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 144, column 13 - line 145, column 38: " + [ x.constructor.name ]);
            };
            return Data_Unfoldable.unfoldr(Data_List_Lazy_Types.unfoldableList)(g)(start);
        };
        if (Data_Boolean.otherwise) {
            var f = function (x) {
                if (x <= end) {
                    return new Data_Maybe.Just(new Data_Tuple.Tuple(x, x + 1 | 0));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 149, column 5 - line 150, column 30: " + [ x.constructor.name ]);
            };
            return Data_Unfoldable.unfoldr(Data_List_Lazy_Types.unfoldableList)(f)(start);
        };
        throw new Error("Failed pattern match at Data.List.Lazy line 142, column 1 - line 150, column 30: " + [ start.constructor.name, end.constructor.name ]);
    };
};
var $$null = function ($202) {
    return Data_Maybe.isNothing(uncons($202));
};
var mapMaybe = function (f) {
    var go = function (__copy_v) {
        var __tco_done = false;
        var __tco_result;
        function __tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Nil) {
                __tco_done = true;
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v instanceof Data_List_Lazy_Types.Cons) {
                var v1 = f(v.value0);
                if (v1 instanceof Data_Maybe.Nothing) {
                    __copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
                if (v1 instanceof Data_Maybe.Just) {
                    __tco_done = true;
                    return new Data_List_Lazy_Types.Cons(v1.value0, mapMaybe(f)(v.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 456, column 5 - line 458, column 39: " + [ v1.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.List.Lazy line 452, column 14 - line 458, column 39: " + [ v.constructor.name ]);
        };
        while (!__tco_done) {
            __tco_result = __tco_loop(__copy_v);
        };
        return __tco_result;
    };
    return function ($203) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($203)));
    };
};
var some = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Apply.apply((dictAlternative.Applicative0()).Apply0())(Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0())(Data_List_Lazy_Types.cons)(v))(Control_Lazy.defer(dictLazy)(function (v1) {
                return many(dictAlternative)(dictLazy)(v);
            }));
        };
    };
};
var many = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Alt.alt((dictAlternative.Plus1()).Alt0())(some(dictAlternative)(dictLazy)(v))(Control_Applicative.pure(dictAlternative.Applicative0())(Data_List_Lazy_Types.nil));
        };
    };
};
var length = Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(function (l) {
    return function (v) {
        return l + 1 | 0;
    };
})(0);
var last = (function () {
    var go = function (__copy_v) {
        var __tco_done = false;
        var __tco_result;
        function __tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Cons) {
                if ($$null(v.value1)) {
                    __tco_done = true;
                    return new Data_Maybe.Just(v.value0);
                };
                if (Data_Boolean.otherwise) {
                    __copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
            };
            __tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        while (!__tco_done) {
            __tco_result = __tco_loop(__copy_v);
        };
        return __tco_result;
    };
    return function ($204) {
        return go(Data_List_Lazy_Types.step($204));
    };
})();
var iterate = function (f) {
    return function (x) {
        return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (xs) {
            return Data_List_Lazy_Types.cons(x)(Data_Functor.map(Data_List_Lazy_Types.functorList)(f)(xs));
        });
    };
};
var insertAt = function (v) {
    return function (x) {
        return function (xs) {
            if (v === 0) {
                return Data_List_Lazy_Types.cons(x)(xs);
            };
            var go = function (v1) {
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    return new Data_List_Lazy_Types.Cons(x, Data_List_Lazy_Types.nil);
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    return new Data_List_Lazy_Types.Cons(v1.value0, insertAt(v - 1 | 0)(x)(v1.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 336, column 3 - line 336, column 22: " + [ v1.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var init = (function () {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Cons) {
            if ($$null(v.value1)) {
                return new Data_Maybe.Just(Data_List_Lazy_Types.nil);
            };
            if (Data_Boolean.otherwise) {
                return Data_Functor.map(Data_Maybe.functorMaybe)(Data_List_Lazy_Types.cons(v.value0))(go(Data_List_Lazy_Types.step(v.value1)));
            };
        };
        return Data_Maybe.Nothing.value;
    };
    return function ($205) {
        return go(Data_List_Lazy_Types.step($205));
    };
})();
var index = function (xs) {
    var go = function (__copy_v) {
        return function (__copy_v1) {
            var __tco_v = __copy_v;
            var __tco_done = false;
            var __tco_result;
            function __tco_loop(v, v1) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    __tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons && v1 === 0) {
                    __tco_done = true;
                    return new Data_Maybe.Just(v.value0);
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    __tco_v = Data_List_Lazy_Types.step(v.value1);
                    __copy_v1 = v1 - 1 | 0;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 293, column 12 - line 297, column 42: " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!__tco_done) {
                __tco_result = __tco_loop(__tco_v, __copy_v1);
            };
            return __tco_result;
        };
    };
    return go(Data_List_Lazy_Types.step(xs));
};
var head = function (xs) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return v.head;
    })(uncons(xs));
};
var transpose = function (xs) {
    var v = uncons(xs);
    if (v instanceof Data_Maybe.Nothing) {
        return xs;
    };
    if (v instanceof Data_Maybe.Just) {
        var v1 = uncons(v.value0.head);
        if (v1 instanceof Data_Maybe.Nothing) {
            return transpose(v.value0.tail);
        };
        if (v1 instanceof Data_Maybe.Just) {
            return Data_List_Lazy_Types.cons(Data_List_Lazy_Types.cons(v1.value0.head)(mapMaybe(head)(v.value0.tail)))(transpose(Data_List_Lazy_Types.cons(v1.value0.tail)(mapMaybe(tail)(v.value0.tail))));
        };
        throw new Error("Failed pattern match at Data.List.Lazy line 691, column 7 - line 695, column 72: " + [ v1.constructor.name ]);
    };
    throw new Error("Failed pattern match at Data.List.Lazy line 687, column 3 - line 695, column 72: " + [ v.constructor.name ]);
};
var groupBy = function (eq) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Nil) {
            return Data_List_Lazy_Types.Nil.value;
        };
        if (v instanceof Data_List_Lazy_Types.Cons) {
            var v1 = span(eq(v.value0))(v.value1);
            return new Data_List_Lazy_Types.Cons(Data_Lazy.defer(function (v2) {
                return new Data_NonEmpty.NonEmpty(v.value0, v1.init);
            }), groupBy(eq)(v1.rest));
        };
        throw new Error("Failed pattern match at Data.List.Lazy line 555, column 3 - line 555, column 15: " + [ v.constructor.name ]);
    };
    return function ($206) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($206)));
    };
};
var group = function (dictEq) {
    return groupBy(Data_Eq.eq(dictEq));
};
var fromStep = function ($207) {
    return Data_List_Lazy_Types.List(Control_Applicative.pure(Data_Lazy.applicativeLazy)($207));
};
var insertBy = function (cmp) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return new Data_List_Lazy_Types.Cons(x, Data_List_Lazy_Types.nil);
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    var v1 = cmp(x)(v.value0);
                    if (v1 instanceof Data_Ordering.GT) {
                        return new Data_List_Lazy_Types.Cons(v.value0, insertBy(cmp)(x)(v.value1));
                    };
                    return new Data_List_Lazy_Types.Cons(x, fromStep(v));
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 231, column 3 - line 231, column 22: " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var insert = function (dictOrd) {
    return insertBy(Data_Ord.compare(dictOrd));
};
var fromFoldable = function (dictFoldable) {
    return Data_Foldable.foldr(dictFoldable)(Data_List_Lazy_Types.cons)(Data_List_Lazy_Types.nil);
};
var foldM = function (dictMonad) {
    return function (f) {
        return function (a) {
            return function (xs) {
                var v = uncons(xs);
                if (v instanceof Data_Maybe.Nothing) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(a);
                };
                if (v instanceof Data_Maybe.Just) {
                    return Control_Bind.bind(dictMonad.Bind1())(f(a)(v.value0.head))(function (a$prime) {
                        return foldM(dictMonad)(f)(a$prime)(v.value0.tail);
                    });
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 704, column 5 - line 707, column 52: " + [ v.constructor.name ]);
            };
        };
    };
};
var findIndex = function (fn) {
    var go = function (n) {
        return function (list) {
            return Control_Bind.bind(Data_Maybe.bindMaybe)(uncons(list))(function (v) {
                var $162 = fn(v.head);
                if ($162) {
                    return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(n);
                };
                return go(n + 1 | 0)(v.tail);
            });
        };
    };
    return go(0);
};
var findLastIndex = function (fn) {
    return function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
            return (length(xs) - 1 | 0) - v | 0;
        })(findIndex(fn)(reverse(xs)));
    };
};
var filterM = function (dictMonad) {
    return function (p) {
        return function (list) {
            var v = uncons(list);
            if (v instanceof Data_Maybe.Nothing) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.nil);
            };
            if (v instanceof Data_Maybe.Just) {
                return Control_Bind.bind(dictMonad.Bind1())(p(v.value0.head))(function (v1) {
                    return Control_Bind.bind(dictMonad.Bind1())(filterM(dictMonad)(p)(v.value0.tail))(function (v2) {
                        return Control_Applicative.pure(dictMonad.Applicative0())((function () {
                            if (v1) {
                                return Data_List_Lazy_Types.cons(v.value0.head)(v2);
                            };
                            return v2;
                        })());
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List.Lazy line 439, column 5 - line 444, column 48: " + [ v.constructor.name ]);
        };
    };
};
var filter = function (p) {
    var go = function (__copy_v) {
        var __tco_done = false;
        var __tco_result;
        function __tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Nil) {
                __tco_done = true;
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v instanceof Data_List_Lazy_Types.Cons) {
                if (p(v.value0)) {
                    __tco_done = true;
                    return new Data_List_Lazy_Types.Cons(v.value0, filter(p)(v.value1));
                };
                if (Data_Boolean.otherwise) {
                    __copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
            };
            throw new Error("Failed pattern match at Data.List.Lazy line 422, column 12 - line 427, column 31: " + [ v.constructor.name ]);
        };
        while (!__tco_done) {
            __tco_result = __tco_loop(__copy_v);
        };
        return __tco_result;
    };
    return function ($208) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($208)));
    };
};
var intersectBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return filter(function (x) {
                return Data_Foldable.any(Data_List_Lazy_Types.foldableList)(Data_HeytingAlgebra.heytingAlgebraBoolean)(eq(x))(ys);
            })(xs);
        };
    };
};
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};
var nubBy = function (eq) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Nil) {
            return Data_List_Lazy_Types.Nil.value;
        };
        if (v instanceof Data_List_Lazy_Types.Cons) {
            return new Data_List_Lazy_Types.Cons(v.value0, nubBy(eq)(filter(function (y) {
                return !eq(v.value0)(y);
            })(v.value1)));
        };
        throw new Error("Failed pattern match at Data.List.Lazy line 578, column 3 - line 578, column 15: " + [ v.constructor.name ]);
    };
    return function ($209) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($209)));
    };
};
var nub = function (dictEq) {
    return nubBy(Data_Eq.eq(dictEq));
};
var elemLastIndex = function (dictEq) {
    return function (x) {
        return findLastIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var elemIndex = function (dictEq) {
    return function (x) {
        return findIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var dropWhile = function (p) {
    var go = function (__copy_v) {
        var __tco_done = false;
        var __tco_result;
        function __tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Cons && p(v.value0)) {
                __copy_v = Data_List_Lazy_Types.step(v.value1);
                return;
            };
            __tco_done = true;
            return fromStep(v);
        };
        while (!__tco_done) {
            __tco_result = __tco_loop(__copy_v);
        };
        return __tco_result;
    };
    return function ($210) {
        return go(Data_List_Lazy_Types.step($210));
    };
};
var drop = function (n) {
    var go = function (__copy_v) {
        return function (__copy_v1) {
            var __tco_v = __copy_v;
            var __tco_done = false;
            var __tco_result;
            function __tco_loop(v, v1) {
                if (v === 0) {
                    __tco_done = true;
                    return v1;
                };
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    __tco_done = true;
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    __tco_v = v - 1 | 0;
                    __copy_v1 = Data_List_Lazy_Types.step(v1.value1);
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 501, column 10 - line 505, column 44: " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!__tco_done) {
                __tco_result = __tco_loop(__tco_v, __copy_v1);
            };
            return __tco_result;
        };
    };
    return function ($211) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($211)));
    };
};
var slice = function (start) {
    return function (end) {
        return function (xs) {
            return take(end - start | 0)(drop(start)(xs));
        };
    };
};
var deleteBy = function (eq) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    if (eq(x)(v.value0)) {
                        return Data_List_Lazy_Types.step(v.value1);
                    };
                    if (Data_Boolean.otherwise) {
                        return new Data_List_Lazy_Types.Cons(v.value0, deleteBy(eq)(x)(v.value1));
                    };
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 607, column 3 - line 607, column 15: " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var unionBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return Data_Semigroup.append(Data_List_Lazy_Types.semigroupList)(xs)(Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip(deleteBy(eq)))(nubBy(eq)(ys))(xs));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};
var deleteAt = function (n) {
    return function (xs) {
        var go = function (v) {
            return function (v1) {
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                    return Data_List_Lazy_Types.step(v1.value1);
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    return new Data_List_Lazy_Types.Cons(v1.value0, deleteAt(v - 1 | 0)(v1.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy line 349, column 3 - line 349, column 17: " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
    };
};
var $$delete = function (dictEq) {
    return deleteBy(Data_Eq.eq(dictEq));
};
var difference = function (dictEq) {
    return Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip($$delete(dictEq)));
};
var cycle = function (xs) {
    return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (ys) {
        return Data_Semigroup.append(Data_List_Lazy_Types.semigroupList)(xs)(ys);
    });
};
var concatMap = Data_Function.flip(Control_Bind.bind(Data_List_Lazy_Types.bindList));
var concat = function (v) {
    return Control_Bind.bind(Data_List_Lazy_Types.bindList)(v)(Control_Category.id(Control_Category.categoryFn));
};
var catMaybes = mapMaybe(Control_Category.id(Control_Category.categoryFn));
var alterAt = function (n) {
    return function (f) {
        return function (xs) {
            var go = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                        var v2 = f(v1.value0);
                        if (v2 instanceof Data_Maybe.Nothing) {
                            return Data_List_Lazy_Types.step(v1.value1);
                        };
                        if (v2 instanceof Data_Maybe.Just) {
                            return new Data_List_Lazy_Types.Cons(v2.value0, v1.value1);
                        };
                        throw new Error("Failed pattern match at Data.List.Lazy line 390, column 22 - line 392, column 26: " + [ v2.constructor.name ]);
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(v1.value0, alterAt(v - 1 | 0)(f)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy line 389, column 3 - line 389, column 17: " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var modifyAt = function (n) {
    return function (f) {
        return alterAt(n)(function ($212) {
            return Data_Maybe.Just.create(f($212));
        });
    };
};
module.exports = {
    alterAt: alterAt, 
    catMaybes: catMaybes, 
    concat: concat, 
    concatMap: concatMap, 
    cycle: cycle, 
    "delete": $$delete, 
    deleteAt: deleteAt, 
    deleteBy: deleteBy, 
    difference: difference, 
    drop: drop, 
    dropWhile: dropWhile, 
    elemIndex: elemIndex, 
    elemLastIndex: elemLastIndex, 
    filter: filter, 
    filterM: filterM, 
    findIndex: findIndex, 
    findLastIndex: findLastIndex, 
    foldM: foldM, 
    fromFoldable: fromFoldable, 
    group: group, 
    groupBy: groupBy, 
    head: head, 
    index: index, 
    init: init, 
    insert: insert, 
    insertAt: insertAt, 
    insertBy: insertBy, 
    intersect: intersect, 
    intersectBy: intersectBy, 
    iterate: iterate, 
    last: last, 
    length: length, 
    many: many, 
    mapMaybe: mapMaybe, 
    modifyAt: modifyAt, 
    nub: nub, 
    nubBy: nubBy, 
    "null": $$null, 
    range: range, 
    repeat: repeat, 
    replicate: replicate, 
    replicateM: replicateM, 
    reverse: reverse, 
    singleton: singleton, 
    slice: slice, 
    snoc: snoc, 
    some: some, 
    span: span, 
    tail: tail, 
    take: take, 
    takeWhile: takeWhile, 
    toUnfoldable: toUnfoldable, 
    transpose: transpose, 
    uncons: uncons, 
    union: union, 
    unionBy: unionBy, 
    unzip: unzip, 
    updateAt: updateAt, 
    zip: zip, 
    zipWith: zipWith, 
    zipWithA: zipWithA
};
