/*
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

import empty = require( '@stdlib/ndarray-base-empty' );
import MultiSlice = require( '@stdlib/slice-multi' );
import slice = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = new MultiSlice( null, null );

	slice( empty( 'float64', sh, order ), s ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), s ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), s ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), s ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), s ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), s ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), s ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), s ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), s ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), s ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), s ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), [ null, null ] ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), [ null, null ] ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), [ null, null ] ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), [ null, null ] ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), [ null, null ] ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), [ null, null ] ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), [ null, null ] ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), [ null, null ] ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), [ null, null ] ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), [ null, null ] ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), [ null, null ] ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), null, null ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), null, null ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), null, null ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), null, null ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), null, null ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), null, null ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), null, null ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), null, null ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), null, null ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), null, null ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), null, null ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), s, { 'strict': false } ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), s, { 'strict': false } ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), s, { 'strict': false } ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), s, { 'strict': false } ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), s, { 'strict': false } ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), s, { 'strict': false } ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), s, { 'strict': false } ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), s, { 'strict': false } ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), s, { 'strict': false } ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), s, { 'strict': false } ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), s, { 'strict': false } ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), [ null, null ], { 'strict': false } ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), null, null, { 'strict': false } ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), null, null, { 'strict': false } ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), null, null, { 'strict': false } ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), null, null, { 'strict': false } ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), null, null, { 'strict': false } ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), null, null, { 'strict': false } ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), null, null, { 'strict': false } ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), null, null, { 'strict': false } ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), null, null, { 'strict': false } ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), null, null, { 'strict': false } ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), null, null, { 'strict': false } ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), s, { 'strict': true } ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), s, { 'strict': true } ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), s, { 'strict': true } ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), s, { 'strict': true } ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), s, { 'strict': true } ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), s, { 'strict': true } ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), s, { 'strict': true } ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), s, { 'strict': true } ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), s, { 'strict': true } ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), s, { 'strict': true } ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), s, { 'strict': true } ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), [ null, null ], { 'strict': true } ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), null, null, { 'strict': true } ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), null, null, { 'strict': true } ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), null, null, { 'strict': true } ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), null, null, { 'strict': true } ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), null, null, { 'strict': true } ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), null, null, { 'strict': true } ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), null, null, { 'strict': true } ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), null, null, { 'strict': true } ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), null, null, { 'strict': true } ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), null, null, { 'strict': true } ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), null, null, { 'strict': true } ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = new MultiSlice( null, null );

	slice( '10', s ); // $ExpectError
	slice( 10, s ); // $ExpectError
	slice( false, s ); // $ExpectError
	slice( true, s ); // $ExpectError
	slice( null, s ); // $ExpectError
	slice( [], s ); // $ExpectError
	slice( {}, s ); // $ExpectError
	slice( ( x: number ): number => x, s ); // $ExpectError

	slice( '10', s, {} ); // $ExpectError
	slice( 10, s, {} ); // $ExpectError
	slice( false, s, {} ); // $ExpectError
	slice( true, s, {} ); // $ExpectError
	slice( null, s, {} ); // $ExpectError
	slice( [], s, {} ); // $ExpectError
	slice( {}, s, {} ); // $ExpectError
	slice( ( x: number ): number => x, s, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid slice argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	slice( x, '5' ); // $ExpectError
	slice( x, true ); // $ExpectError
	slice( x, [ '5' ] ); // $ExpectError
	slice( x, ( x: number ): number => x ); // $ExpectError

	slice( x, '5', {} ); // $ExpectError
	slice( x, false, {} ); // $ExpectError
	slice( x, true, {} ); // $ExpectError
	slice( x, [ '5' ], {} ); // $ExpectError
	slice( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid slice argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	slice( x, null, '5' ); // $ExpectError
	slice( x, null, true ); // $ExpectError
	slice( x, null, [ '5' ] ); // $ExpectError
	slice( x, null, ( x: number ): number => x ); // $ExpectError

	slice( x, null, '5', {} ); // $ExpectError
	slice( x, null, false, {} ); // $ExpectError
	slice( x, null, true, {} ); // $ExpectError
	slice( x, null, [ '5' ], {} ); // $ExpectError
	slice( x, null, ( x: number ): number => x, {} ); // $ExpectError

	slice( x, null, 1, '5' ); // $ExpectError
	slice( x, null, 1, true ); // $ExpectError
	slice( x, null, 1, [ '5' ] ); // $ExpectError
	slice( x, null, 1, ( x: number ): number => x ); // $ExpectError

	slice( x, null, 1, '5', {} ); // $ExpectError
	slice( x, null, 1, false, {} ); // $ExpectError
	slice( x, null, 1, true, {} ); // $ExpectError
	slice( x, null, 1, [ '5' ], {} ); // $ExpectError
	slice( x, null, 1, ( x: number ): number => x, {} ); // $ExpectError

	slice( x, null, 1, undefined, '5' ); // $ExpectError
	slice( x, null, 1, undefined, true ); // $ExpectError
	slice( x, null, 1, undefined, [ '5' ] ); // $ExpectError
	slice( x, null, 1, undefined, ( x: number ): number => x ); // $ExpectError

	slice( x, null, 1, undefined, '5', {} ); // $ExpectError
	slice( x, null, 1, undefined, false, {} ); // $ExpectError
	slice( x, null, 1, undefined, true, {} ); // $ExpectError
	slice( x, null, 1, undefined, [ '5' ], {} ); // $ExpectError
	slice( x, null, 1, undefined, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	slice( x, s, '5' ); // $ExpectError
	slice( x, s, 5 ); // $ExpectError
	slice( x, s, true ); // $ExpectError
	slice( x, s, false ); // $ExpectError
	slice( x, s, null ); // $ExpectError
	slice( x, s, [ '5' ] ); // $ExpectError
	slice( x, s, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `strict` option which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	slice( x, s, { 'strict': '5' } ); // $ExpectError
	slice( x, s, { 'strict': 5 } ); // $ExpectError
	slice( x, s, { 'strict': null } ); // $ExpectError
	slice( x, s, { 'strict': [ '5' ] } ); // $ExpectError
	slice( x, s, { 'strict': {} } ); // $ExpectError
	slice( x, s, { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	slice(); // $ExpectError
	slice( x, s, {}, {} ); // $ExpectError
}
