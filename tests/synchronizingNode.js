/*globals require, describe, it, expect */

var SynchronizingNode = require('./../lib/synchronizingNode').SynchronizingNode;

describe('SynchronizingNode', function () {
    it('should be defined', function (done) {
        expect(SynchronizingNode).toBeDefined();
        done();
    });
});