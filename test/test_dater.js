var test = require('tap').test;
var journ = require('../journ');
var Dater = require('../lib/dater.js');

test('testing  ', function (t) {

	var arr, wanted, found;
	var dater = new Dater();

	t.deepEqual(18, dater.weekOfYear("May 1, 2017"));
	t.deepEqual(19, dater.weekOfYear("May 8, 2017"));
	t.deepEqual(5, dater.monthNum("May 8, 2017"));

	t.deepEqual(1, dater.dayOfWeek("May 1, 2017"));
	t.deepEqual(3, dater.dayOfWeek("May 3, 2017"));

	t.deepEqual(1, dater.weekOfYear("January 3, 2017"));
	t.deepEqual(2, dater.dayOfWeek("January 3, 2017"));
	t.deepEqual(1, dater.monthNum("January 3, 2017"));

	t.deepEqual(38, dater.weekOfYear("September 23, 2018"));
	t.deepEqual(7, dater.dayOfWeek("September 23, 2018"));

	t.deepEqual(12, dater.monthNum("December 3, 2017"));

	t.deepEqual("W23", dater.fmtWeekISO8601(23));
	t.deepEqual("W09", dater.fmtWeekISO8601(9));	
	t.deepEqual("W01", dater.fmtWeekISO8601("w1"));

	t.deepEqual("W27", dater.getWeekISO("July 9, 2017"));
	t.deepEqual("W38", dater.getWeekISO("September 23, 2018"));
	t.deepEqual("2018-W38-7", dater.fileName("September 23, 2018"));

/*
	dater.adjustDays(-2);
    t.deepEqual(5, dater.dayOfWeek());
	console.log("yesterday: ", dater.dayOfWeek());
*/

	t.end();

});
