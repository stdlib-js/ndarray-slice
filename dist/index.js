"use strict";var m=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var v=m(function(k,c){"use strict";var g=require("@stdlib/assert-is-ndarray-like"),h=require("@stdlib/assert-is-multi-slice"),f=require("@stdlib/assert-is-array-like-object"),d=require("@stdlib/assert-is-plain-object"),p=require("@stdlib/assert-is-boolean").isPrimitive,w=require("@stdlib/assert-has-own-property"),q=require("@stdlib/slice-multi"),y=require("@stdlib/slice-base-args2multislice"),b=require("@stdlib/ndarray-base-slice"),S=require("@stdlib/ndarray-shape"),s=require("@stdlib/string-format");function E(a,r){var n,i,o,t,u,l,e;if(o={strict:!0},i=arguments.length,!g(a))throw new TypeError(s("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(d(arguments[i-1])){if(i-=1,n=arguments[i],w(n,"strict")){if(!p(n.strict))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",n.strict));o.strict=n.strict}if(u=S(a),i===1&&u.length>0)throw new RangeError(s("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",u.join(","),0))}if(h(r)){if(l=r,i>2)throw new Error("invalid invocation. Too many arguments.")}else{if(f(r)){if(t=r,i>2)throw new Error("invalid invocation. Too many arguments.")}else for(t=[],e=1;e<i;e++)t.push(arguments[e]);try{l=y(t)}catch(O){for(e=0;e<t.length;e++)try{new q(t[e])}catch(j){throw new TypeError(s("invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.",String(t[e])))}}}return b(a,l,o.strict,!1)}c.exports=E});var T=v();module.exports=T;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
