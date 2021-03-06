// Generated by purs version 0.11.4
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Either = require("../Data.Either");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Lens_Internal_Forget = require("../Data.Lens.Internal.Forget");
var Data_Lens_Internal_Indexed = require("../Data.Lens.Internal.Indexed");
var Data_Lens_Types = require("../Data.Lens.Types");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Maybe_First = require("../Data.Maybe.First");
var Data_Maybe_Last = require("../Data.Maybe.Last");
var Data_Monoid = require("../Data.Monoid");
var Data_Monoid_Additive = require("../Data.Monoid.Additive");
var Data_Monoid_Conj = require("../Data.Monoid.Conj");
var Data_Monoid_Disj = require("../Data.Monoid.Disj");
var Data_Monoid_Dual = require("../Data.Monoid.Dual");
var Data_Monoid_Endo = require("../Data.Monoid.Endo");
var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Data_Profunctor = require("../Data.Profunctor");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var unfolded = function (dictMonoid) {
    return function (f) {
        return function (p) {
            var go = function ($42) {
                return Data_Maybe.maybe(Data_Monoid.mempty(dictMonoid))(function (v) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(Data_Newtype.unwrap(Data_Lens_Internal_Forget.newtypeForget)(p)(v.value0))(go(v.value1));
                })(f($42));
            };
            return go;
        };
    };
};
var replicated = function (dictMonoid) {
    return function (i) {
        return function (v) {
            var go = function (v1) {
                return function (x) {
                    if (v1 === 0) {
                        return Data_Monoid.mempty(Data_Monoid.monoidFn(dictMonoid));
                    };
                    return Data_Semigroup.append(Data_Semigroup.semigroupFn(dictMonoid.Semigroup0()))(x)(go(v1 - 1 | 0)(x));
                };
            };
            return go(i)(v);
        };
    };
};
var ifoldMapOf = function (p) {
    return function (f) {
        return Data_Newtype.unwrap(Data_Lens_Internal_Forget.newtypeForget)(p(Data_Lens_Internal_Indexed.Indexed(Data_Tuple.uncurry(f))));
    };
};
var ifoldlOf = function (p) {
    return function (f) {
        return function (r) {
            return function ($43) {
                return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(r)(Data_Newtype.unwrap(Data_Monoid_Dual.newtypeDual)(ifoldMapOf(p)(function (i) {
                    return function ($44) {
                        return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(f(i))($44)));
                    };
                })($43)));
            };
        };
    };
};
var ifoldrOf = function (p) {
    return function (f) {
        return function (r) {
            return function ($45) {
                return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(r)(ifoldMapOf(p)(function (i) {
                    return function ($46) {
                        return Data_Monoid_Endo.Endo(f(i)($46));
                    };
                })($45));
            };
        };
    };
};
var itoListOf = function (p) {
    return ifoldrOf(p)(function (i) {
        return function (x) {
            return function (xs) {
                return new Data_List_Types.Cons(new Data_Tuple.Tuple(i, x), xs);
            };
        };
    })(Data_List_Types.Nil.value);
};
var itraverseOf_ = function (dictApplicative) {
    return function (p) {
        return function (f) {
            return ifoldrOf(p)(function (i) {
                return function (a) {
                    return function (fu) {
                        return Control_Apply.applySecond(dictApplicative.Apply0())(Data_Functor["void"]((dictApplicative.Apply0()).Functor0())(f(i)(a)))(fu);
                    };
                };
            })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var ifindOf = function (p) {
    return function (f) {
        return ifoldrOf(p)(function (i) {
            return function (a) {
                return Data_Maybe.maybe((function () {
                    var $36 = f(i)(a);
                    if ($36) {
                        return new Data_Maybe.Just(a);
                    };
                    return Data_Maybe.Nothing.value;
                })())(Data_Maybe.Just.create);
            };
        })(Data_Maybe.Nothing.value);
    };
};
var ianyOf = function (dictHeytingAlgebra) {
    return function (p) {
        return function (f) {
            return function ($47) {
                return Data_Newtype.unwrap(Data_Monoid_Disj.newtypeDisj)(ifoldMapOf(p)(function (i) {
                    return function ($48) {
                        return Data_Monoid_Disj.Disj(f(i)($48));
                    };
                })($47));
            };
        };
    };
};
var iallOf = function (dictHeytingAlgebra) {
    return function (p) {
        return function (f) {
            return function ($49) {
                return Data_Newtype.unwrap(Data_Monoid_Conj.newtypeConj)(ifoldMapOf(p)(function (i) {
                    return function ($50) {
                        return Data_Monoid_Conj.Conj(f(i)($50));
                    };
                })($49));
            };
        };
    };
};
var folded = function (dictMonoid) {
    return function (dictFoldable) {
        return function (v) {
            return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(v);
        };
    };
};
var foldMapOf = Data_Newtype.under(Data_Lens_Internal_Forget.newtypeForget)(Data_Lens_Internal_Forget.newtypeForget)(Data_Lens_Internal_Forget.Forget);
var foldOf = function (p) {
    return foldMapOf(p)(Control_Category.id(Control_Category.categoryFn));
};
var foldlOf = function (p) {
    return function (f) {
        return function (r) {
            return function ($51) {
                return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(r)(Data_Newtype.unwrap(Data_Monoid_Dual.newtypeDual)(foldMapOf(p)(function ($52) {
                    return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(f)($52)));
                })($51)));
            };
        };
    };
};
var foldrOf = function (p) {
    return function (f) {
        return function (r) {
            return function ($53) {
                return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(r)(foldMapOf(p)(function ($54) {
                    return Data_Monoid_Endo.Endo(f($54));
                })($53));
            };
        };
    };
};
var maximumOf = function (dictOrd) {
    return function (p) {
        var max = function (a) {
            return function (b) {
                var $38 = Data_Ord.greaterThan(dictOrd)(a)(b);
                if ($38) {
                    return a;
                };
                return b;
            };
        };
        return foldrOf(p)(function (a) {
            return function ($55) {
                return Data_Maybe.Just.create(Data_Maybe.maybe(a)(max(a))($55));
            };
        })(Data_Maybe.Nothing.value);
    };
};
var minimumOf = function (dictOrd) {
    return function (p) {
        var min = function (a) {
            return function (b) {
                var $39 = Data_Ord.lessThan(dictOrd)(a)(b);
                if ($39) {
                    return a;
                };
                return b;
            };
        };
        return foldrOf(p)(function (a) {
            return function ($56) {
                return Data_Maybe.Just.create(Data_Maybe.maybe(a)(min(a))($56));
            };
        })(Data_Maybe.Nothing.value);
    };
};
var toListOf = function (p) {
    return foldrOf(p)(Data_List_Types.Cons.create)(Data_List_Types.Nil.value);
};
var toListOfOn = function (s) {
    return function (p) {
        return toListOf(p)(s);
    };
};
var traverseOf_ = function (dictApplicative) {
    return function (p) {
        return function (f) {
            return foldrOf(p)(function (a) {
                return function (fu) {
                    return Control_Apply.applySecond(dictApplicative.Apply0())(Data_Functor["void"]((dictApplicative.Apply0()).Functor0())(f(a)))(fu);
                };
            })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var has = function (dictHeytingAlgebra) {
    return function (p) {
        return function ($57) {
            return Data_Newtype.unwrap(Data_Monoid_Disj.newtypeDisj)(foldMapOf(p)(Data_Function["const"](Data_HeytingAlgebra.tt(dictHeytingAlgebra)))($57));
        };
    };
};
var hasn$primet = function (dictHeytingAlgebra) {
    return function (p) {
        return function ($58) {
            return Data_Newtype.unwrap(Data_Monoid_Conj.newtypeConj)(foldMapOf(p)(Data_Function["const"](Data_HeytingAlgebra.ff(dictHeytingAlgebra)))($58));
        };
    };
};
var lastOf = function (p) {
    return function ($59) {
        return Data_Newtype.unwrap(Data_Maybe_Last.newtypeLast)(foldMapOf(p)(function ($60) {
            return Data_Maybe_Last.Last(Data_Maybe.Just.create($60));
        })($59));
    };
};
var lengthOf = function (p) {
    return function ($61) {
        return Data_Newtype.unwrap(Data_Monoid_Additive.newtypeAdditive)(foldMapOf(p)(Data_Function["const"](1))($61));
    };
};
var preview = function (p) {
    return function ($62) {
        return Data_Newtype.unwrap(Data_Maybe_First.newtypeFirst)(foldMapOf(p)(function ($63) {
            return Data_Maybe_First.First(Data_Maybe.Just.create($63));
        })($62));
    };
};
var previewOn = function (s) {
    return function (p) {
        return preview(p)(s);
    };
};
var productOf = function (dictSemiring) {
    return function (p) {
        return function ($64) {
            return Data_Newtype.unwrap(Data_Monoid_Multiplicative.newtypeMultiplicative)(foldMapOf(p)(Data_Monoid_Multiplicative.Multiplicative)($64));
        };
    };
};
var sequenceOf_ = function (dictApplicative) {
    return function (p) {
        return function ($65) {
            return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(Control_Applicative.pure(dictApplicative)(Data_Unit.unit))(foldMapOf(p)(function (f) {
                return function (v) {
                    return Control_Apply.applySecond(dictApplicative.Apply0())(f)(v);
                };
            })($65));
        };
    };
};
var sumOf = function (dictSemiring) {
    return function (p) {
        return function ($66) {
            return Data_Newtype.unwrap(Data_Monoid_Additive.newtypeAdditive)(foldMapOf(p)(Data_Monoid_Additive.Additive)($66));
        };
    };
};
var firstOf = function (p) {
    return function ($67) {
        return Data_Newtype.unwrap(Data_Maybe_First.newtypeFirst)(foldMapOf(p)(function ($68) {
            return Data_Maybe_First.First(Data_Maybe.Just.create($68));
        })($67));
    };
};
var findOf = function (p) {
    return function (f) {
        return foldrOf(p)(function (a) {
            return Data_Maybe.maybe((function () {
                var $40 = f(a);
                if ($40) {
                    return new Data_Maybe.Just(a);
                };
                return Data_Maybe.Nothing.value;
            })())(Data_Maybe.Just.create);
        })(Data_Maybe.Nothing.value);
    };
};
var filtered = function (dictChoice) {
    return function (f) {
        return function ($69) {
            return Data_Profunctor.dimap(dictChoice.Profunctor0())(function (x) {
                var $41 = f(x);
                if ($41) {
                    return new Data_Either.Right(x);
                };
                return new Data_Either.Left(x);
            })(Data_Either.either(Control_Category.id(Control_Category.categoryFn))(Control_Category.id(Control_Category.categoryFn)))(Data_Profunctor_Choice.right(dictChoice)($69));
        };
    };
};
var anyOf = function (dictHeytingAlgebra) {
    return function (p) {
        return function (f) {
            return function ($70) {
                return Data_Newtype.unwrap(Data_Monoid_Disj.newtypeDisj)(foldMapOf(p)(function ($71) {
                    return Data_Monoid_Disj.Disj(f($71));
                })($70));
            };
        };
    };
};
var elemOf = function (dictEq) {
    return function (p) {
        return function (a) {
            return anyOf(Data_HeytingAlgebra.heytingAlgebraBoolean)(p)(function (v) {
                return Data_Eq.eq(dictEq)(v)(a);
            });
        };
    };
};
var orOf = function (dictHeytingAlgebra) {
    return function (p) {
        return anyOf(dictHeytingAlgebra)(p)(Control_Category.id(Control_Category.categoryFn));
    };
};
var allOf = function (dictHeytingAlgebra) {
    return function (p) {
        return function (f) {
            return function ($72) {
                return Data_Newtype.unwrap(Data_Monoid_Conj.newtypeConj)(foldMapOf(p)(function ($73) {
                    return Data_Monoid_Conj.Conj(f($73));
                })($72));
            };
        };
    };
};
var andOf = function (dictHeytingAlgebra) {
    return function (p) {
        return allOf(dictHeytingAlgebra)(p)(Control_Category.id(Control_Category.categoryFn));
    };
};
var notElemOf = function (dictEq) {
    return function (p) {
        return function (a) {
            return allOf(Data_HeytingAlgebra.heytingAlgebraBoolean)(p)(function (v) {
                return Data_Eq.notEq(dictEq)(v)(a);
            });
        };
    };
};
module.exports = {
    allOf: allOf, 
    andOf: andOf, 
    anyOf: anyOf, 
    elemOf: elemOf, 
    filtered: filtered, 
    findOf: findOf, 
    firstOf: firstOf, 
    foldMapOf: foldMapOf, 
    foldOf: foldOf, 
    folded: folded, 
    foldlOf: foldlOf, 
    foldrOf: foldrOf, 
    has: has, 
    "hasn't": hasn$primet, 
    iallOf: iallOf, 
    ianyOf: ianyOf, 
    ifoldMapOf: ifoldMapOf, 
    ifoldlOf: ifoldlOf, 
    ifoldrOf: ifoldrOf, 
    itoListOf: itoListOf, 
    itraverseOf_: itraverseOf_, 
    lastOf: lastOf, 
    lengthOf: lengthOf, 
    maximumOf: maximumOf, 
    minimumOf: minimumOf, 
    notElemOf: notElemOf, 
    orOf: orOf, 
    preview: preview, 
    previewOn: previewOn, 
    productOf: productOf, 
    replicated: replicated, 
    sequenceOf_: sequenceOf_, 
    sumOf: sumOf, 
    toListOf: toListOf, 
    toListOfOn: toListOfOn, 
    traverseOf_: traverseOf_, 
    unfolded: unfolded
};
