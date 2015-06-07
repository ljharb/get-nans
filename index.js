var nans = [NaN];
if (typeof Float64Array !== 'undefined' && typeof Int32Array !== 'undefined') {
	var originalNaNs = [0 / 0, Infinity / Infinity];
	var nanInts = new Int32Array(new Float64Array(originalNaNs).buffer);
	if (nanInts.length !== 4 || nanInts[0] !== nanInts[2] || nanInts[1] !== nanInts[3]) {
		nans = originalNaNs;
	}
}
if (Object.freeze) {
	nans = Object.freeze(nans);
}

module.exports = function getNaNs() {
	return nans;
};
