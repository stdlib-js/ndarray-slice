"use strict";var g=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var m=g(function(P,v){"use strict";var h=require("@stdlib/assert-is-ndarray-like"),f=require("@stdlib/assert-is-multi-slice"),p=require("@stdlib/assert-is-array-like-object"),d=require("@stdlib/assert-is-plain-object"),w=require("@stdlib/assert-is-boolean").isPrimitive,y=require("@stdlib/assert-has-own-property"),c=require("@stdlib/slice-multi"),q=require("@stdlib/ndarray-base-slice"),b=require("@stdlib/ndarray-shape"),s=require("@stdlib/string-format");function S(a,r){var n,i,o,t,u,l,e;if(o={strict:!0},i=arguments.length,!h(a))throw new TypeError(s("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(d(arguments[i-1])){if(i-=1,n=arguments[i],y(n,"strict")){if(!w(n.strict))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",n.strict));o.strict=n.strict}if(u=b(a),i===1&&u.length>0)throw new RangeError(s("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",u.join(","),0))}if(f(r)){if(l=r,i>2)throw new Error("invalid invocation. Too many arguments.")}else{if(p(r)){if(t=r,i>2)throw new Error("invalid invocation. Too many arguments.")}else for(t=[],e=1;e<i;e++)t.push(arguments[e]);try{l=c.apply(null,t)}catch(T){for(e=0;e<t.length;e++)try{new c(t[e])}catch(O){throw new TypeError(s("invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.",String(t[e])))}}}return q(a,l,o.strict,!1)}v.exports=S});var E=m();module.exports=E;
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
