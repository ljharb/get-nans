'use strict';

var forEach = require('for-each');
var padStart = require('string.prototype.padstart');

var exp = function tryExponentiation(a, b) {
	try {
		// eslint-disable-next-line no-eval
		return [eval('(' + a + ')**' + b), Math.pow(a, b)];
	} catch (e) {
		return [Math.pow(a, b)];
	}
};

/* globals Float64Array, Uint32Array */

var nans = {};
if (typeof Float64Array !== 'undefined' && typeof Uint32Array !== 'undefined') {
	var f = new Float64Array(1);
	var i = new Uint32Array(f.buffer);
	forEach([
		// NaN
		NaN,

		// ToNumber(undefined) is NaN
		Number(undefined),

		// Multiplication of an infinity by a zero results in NaN.
		Infinity * 0,

		// Division of an infinity by an infinity results in NaN.
		Infinity / Infinity,

		// Division of a zero by a zero results in NaN.
		0 / 0,

		// If the dividend is an infinity, or the divisor is a zero, or both, the result is NaN.
		Infinity % 1,
		1 % 0,
		Infinity % 0,

		// The sum of two infinities of opposite sign is NaN.
		-Infinity + Infinity
	].concat(
		// If exponent is NaN, the result is NaN.
		exp(1, NaN),

		// If base is NaN and exponent is nonzero, the result is NaN.
		exp(NaN, 1),

		// If abs(base) is 1 and exponent is +∞, the result is NaN.
		exp(1, Infinity),

		// If abs(base) is 1 and exponent is -∞, the result is NaN.
		exp(1, -Infinity),

		// If base < 0 and base is finite and exponent is finite and exponent is not an integer, the result is NaN.
		exp(-1, 0.5) // IE 10/11 differentiable NaN
	), function (n) {
		f[0] = n;
		var s = padStart(i[1].toString(2), 32, '0') + padStart(i[0].toString(2), 32, '0');
		nans[s] = n;

		f[0] = -n;
		var negS = padStart(i[1].toString(2), 32, '0') + padStart(i[0].toString(2), 32, '0');
		nans[negS] = -n;
	});
}
if (Object.freeze) {
	nans = Object.freeze(nans);
}

module.exports = function getNaNs() {
	return nans;
};
