var test = require('tape');

var getNaNs = require('./');

test('returns NaN', function (t) {
	var nans = getNaNs();

	t.equal(true, Array.isArray(nans), 'returns an array');

	for (var i = 0; i < nans.length; ++i) {
		t.notEqual(nans[i], nans[i], 'index ' + i + ' is NaN');
	}

	t.test('returns only one NaN', function (st) {
		st.equal(1, nans.length, 'there can be only one');
		st.end();
	});
	t.end();
});

