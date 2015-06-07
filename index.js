var nans = [NaN];
if (typeof Float64Array !== 'undefined' && typeof Int32Array !== 'undefined') {
	var originalNaNs = [
		0 / 0, // standard NaN
		Infinity / Infinity, // v8 differentiable NaN
		Math.pow(-1, 0.5) // IE 11 differentiable NaN
	];
	var nanInts = new Int32Array(new Float64Array(originalNaNs).buffer);
	if (nanInts.length !== originalNaNs.length * 2) {
		throw new RangeError('got wrong length on nanInts: ' + nanInts.length);
	}
	var map = {};
	for (var i = 0; i < nanInts.length; i += 2) {
		var key = nanInts[i] + '|' + nanInts[i + 1];
		map[key] = originalNaNs[i / 2];
	}
	var nanKeys = Object.keys(map);
	if (nanKeys.length !== 1) {
		nans = nanKeys.map(function (nanKey) { return map[nanKey]; });
	}
}
if (Object.freeze) {
	nans = Object.freeze(nans);
}

module.exports = function getNaNs() {
	return nans;
};
