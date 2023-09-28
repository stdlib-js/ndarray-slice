"use strict";var v=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var m=v(function(O,c){"use strict";var g=require("@stdlib/assert-is-ndarray-like"),h=require("@stdlib/assert-is-multi-slice"),p=require("@stdlib/assert-is-array-like-object"),f=require("@stdlib/assert-is-plain-object"),d=require("@stdlib/assert-is-boolean").isPrimitive,w=require("@stdlib/assert-has-own-property"),l=require("@stdlib/slice-multi"),y=require("@stdlib/ndarray-base-slice"),s=require("@stdlib/string-format");function q(t,r){var n,i,o,a,u,e;if(o={strict:!0},i=arguments.length,!g(t))throw new TypeError(s("invalid argument. First argument must be an ndarray. Value: `%s`.",t));if(f(arguments[i-1])){if(i-=1,n=arguments[i],w(n,"strict")){if(!d(n.strict))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",n.strict));o.strict=n.strict}if(i===1&&t.shape.length>0)throw new RangeError(s("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",t.shape.join(","),0))}if(h(r)){if(u=r,i>2)throw new Error("invalid invocation. Too many arguments.")}else{if(p(r)){if(a=r,i>2)throw new Error("invalid invocation. Too many arguments.")}else for(a=[],e=1;e<i;e++)a.push(arguments[e]);try{u=l.apply(null,a)}catch(S){for(e=0;e<a.length;e++)try{new l(a[e])}catch(E){throw new TypeError(s("invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.",String(a[e])))}}}return y(t,u,o.strict)}c.exports=q});var b=m();module.exports=b;
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
