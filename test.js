'use strict';

var test = require('tape');
var forEach = require('for-each');
var keys = require('object-keys');

var getNaNs = require('./');

test('returns NaN', function (t) {
	var nans = getNaNs();

	t.equal(true, Object(nans) === nans, 'returns an object');

	forEach(nans, function (nan, bits) {
		t.notEqual(nan, nan, bits + ' is NaN');
	});

	t.test('returns only one NaN', function (st) {
		st.equal(keys(nans).length, 1, 'there can be only one');
		st.end();
	});

	t.end();
});
