'use strict';

var test = require('tape');

var getNaNs = require('./');

var isArray = require('isarray');

test('returns NaN', function (t) {
	var nans = getNaNs();

	t.equal(true, isArray(nans), 'returns an array');

	for (var i = 0; i < nans.length; ++i) {
		t.notEqual(nans[i], nans[i], 'index ' + i + ' is NaN');
	}

	t.test('returns only one NaN', function (st) {
		st.equal(nans.length, 1, 'there can be only one');
		st.end();
	});
	t.end();
});

