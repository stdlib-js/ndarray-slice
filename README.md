<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# slice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a read-only view of an input [`ndarray`][@stdlib/ndarray/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
slice = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-slice@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/ndarray-slice/tags). For example,

```javascript
slice = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-slice@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var slice = require( 'path/to/vendor/umd/ndarray-slice/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-slice@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.slice;
})();
</script>
```

#### slice( x, ...s\[, options] )

Returns a **read-only** view of an input [`ndarray`][@stdlib/ndarray/ctor].

```javascript
var Slice = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var s0 = new Slice( null, null, -2 );
var s1 = new Slice( null, null, -1 );
var s = new MultiSlice( s0, s1 );
// returns <MultiSlice>

var y = slice( x, s );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 6.0, 5.0 ], [ 2.0, 1.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **s**: a [`MultiSlice`][@stdlib/slice/multi] instance, an array of slice arguments, or slice arguments as separate arguments.
-   **options**: function options.

The function supports three (mutually exclusive) means for providing slice arguments:

1.  providing a single [`MultiSlice`][@stdlib/slice/multi] instance.
2.  providing a single array of slice arguments.
3.  providing slice arguments as separate arguments.

The following example demonstrates each invocation style returning equivalent results.

```javascript
var Slice = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

// 1. Using a MultiSlice:
var s0 = new Slice( 1, null, 1 );
var s1 = new Slice( null, null, 1 );
var s = new MultiSlice( s0, s1 );
// returns <MultiSlice>

var y = slice( x, s );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

// 2. Using an array of slice arguments:
y = slice( x, [ s0, s1 ] );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

// 3. Providing separate arguments:
y = slice( x, s0, s1 );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
```

The function supports the following `options`:

-   **strict**: boolean indicating whether to enforce strict bounds checking.

By default, the function throws an error when provided a slice which exceeds array bounds. To return an empty array when a slice exceeds array bounds, set the `strict` option to `false`.

```javascript
var Slice = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var s0 = new Slice( 1, null, 1 );
var s1 = new Slice( 10, 20, 1 );
var s = new MultiSlice( s0, s1 );
// returns <MultiSlice>

var y = slice( x, s, {
    'strict': false
});
// returns <ndarray>

sh = y.shape;
// returns [ 2, 0 ]

arr = ndarray2array( y );
// returns []
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A **slice argument** must be either a [`Slice`][@stdlib/slice/ctor], an integer, `null`, or `undefined`.
-   The number of slice dimensions must match the number of array dimensions. Hence, if `x` is a zero-dimensional [`ndarray`][@stdlib/ndarray/ctor], then, if `s` is a [`MultiSlice`][@stdlib/slice/multi], `s` should be empty, and, if `s` is an array, `s` should not contain any slice arguments. Similarly, if `x` is a one-dimensional [`ndarray`][@stdlib/ndarray/ctor], then, if `s` is a [`MultiSlice`][@stdlib/slice/multi], `s` should have one slice dimension, and, if `s` is an array, `s` should contain a single slice argument. And so on and so forth.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-slice@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Alias `null` to allow for more compact indexing expressions:
var _ = null;

// Create a linear ndarray buffer:
var buf = zeroTo( 27 );

// Create an ndarray:
var x = array( buf, {
    'shape': [ 3, 3, 3 ]
});

// Get each matrix...
var s1 = E( 0, _, _ );
var y1 = slice( x, s1 );
// returns <ndarray>

var a1 = ndarray2array( y1 );
// returns [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]

var s2 = E( 1, _, _ );
var y2 = slice( x, s2 );
// returns <ndarray>

var a2 = ndarray2array( y2 );
// returns [ [ 9, 10, 11 ], [ 12, 13, 14 ], [ 15, 16, 17 ] ]

var s3 = E( 2, _, _ );
var y3 = slice( x, s3 );
// returns <ndarray>

var a3 = ndarray2array( y3 );
// returns [ [ 18, 19, 20 ], [ 21, 22, 23 ], [ 24, 25, 26 ] ]

// Reverse all elements:
var s = S( _, _, -1 );
var s4 = E( s, s, s );
var y4 = slice( x, s4 );
// returns <ndarray>

var a4 = ndarray2array( y4 );
// returns [...]

// Get the second rows from each matrix:
var s5 = E( _, 1, _ );
var y5 = slice( x, s5 );
// returns <ndarray>

var a5 = ndarray2array( y5 );
// returns [ [ 3, 4, 5 ], [ 12, 13, 14 ], [ 21, 22, 23 ] ]

// Get the second columns from each matrix:
var s6 = E( _, _, 1 );
var y6 = slice( x, s6 );
// returns <ndarray>

var a6 = ndarray2array( y6 );
// returns [ [ 1, 4, 7 ], [ 10, 13, 16 ], [ 19, 22, 25 ] ]

// Use an alternative invocation style:
var y7 = slice( x, _, _, 1 );
// returns <ndarray>

var a7 = ndarray2array( y7 );
// returns [ [ 1, 4, 7 ], [ 10, 13, 16 ], [ 19, 22, 25 ] ]

// Use an alternative invocation style:
var y8 = slice( x, [ _, _, 1 ] );
// returns <ndarray>

var a8 = ndarray2array( y8 );
// returns [ [ 1, 4, 7 ], [ 10, 13, 16 ], [ 19, 22, 25 ] ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-at`][@stdlib/ndarray/at]</span><span class="delimiter">: </span><span class="description">return an ndarray element.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray-slice-assign`][@stdlib/ndarray/slice-assign]</span><span class="delimiter">: </span><span class="description">assign element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.</span>
-   <span class="package-name">[`@stdlib/ndarray-slice-dimension`][@stdlib/ndarray/slice-dimension]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray when sliced along a specified dimension.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-slice.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-slice

[test-image]: https://github.com/stdlib-js/ndarray-slice/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/ndarray-slice/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-slice/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-slice?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-slice.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-slice/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-slice/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-slice/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-slice/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-slice/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-slice/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-slice/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-slice/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-slice/main/LICENSE

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor/tree/umd

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi/tree/umd

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/umd

[@stdlib/ndarray/at]: https://github.com/stdlib-js/ndarray-at/tree/umd

[@stdlib/ndarray/slice-assign]: https://github.com/stdlib-js/ndarray-slice-assign/tree/umd

[@stdlib/ndarray/slice-dimension]: https://github.com/stdlib-js/ndarray-slice-dimension/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
