// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-method-definitions-runtime-semantics-propertydefinitionevaluation
description: Function.prototype.toString on a getter (object)
---*/

let f = Object.getOwnPropertyDescriptor({ /* before */get /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }/* after */ }, "f").get;
let g = Object.getOwnPropertyDescriptor({ /* before */get /* a */ [ /* b */ "g" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }/* after */ }, "g").get;

assert.sameValue(f.toString(), "get /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }");
assert.sameValue(g.toString(), "get /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");

reportCompare(0, 0);
