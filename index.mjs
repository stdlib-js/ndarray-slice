// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-multi-slice@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function h(h,c){var j,p,v,f,g,u,b;if(v={strict:!0},p=arguments.length,!s(h))throw new TypeError(l("invalid argument. First argument must be an ndarray. Value: `%s`.",h));if(i(arguments[p-1])){if(n(j=arguments[p-=1],"strict")){if(!r(j.strict))throw new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",j.strict));v.strict=j.strict}if(g=a(h),1===p&&g.length>0)throw new RangeError(l("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",g.join(","),0))}if(t(c)){if(u=c,p>2)throw new Error("invalid invocation. Too many arguments.")}else{if(e(c)){if(f=c,p>2)throw new Error("invalid invocation. Too many arguments.")}else for(f=[],b=1;b<p;b++)f.push(arguments[b]);try{u=m(f)}catch(s){for(b=0;b<f.length;b++)try{new o(f[b])}catch(s){throw new TypeError(l("invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.",String(f[b])))}}}return d(h,u,v.strict,!1)}export{h as default};
//# sourceMappingURL=index.mjs.map