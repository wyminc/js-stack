var Stack = require('../lib/Stack.js')
// var assert = require('assert');
var should = require('chai').should();

describe('Stack', function() {

  describe('push()', function() {
    it('should have a push function', function() {
      var stack = new Stack;
      stack.hello.should.be.a('function')
    });
  });

  describe('pop()', function() {
    it('should have a pop function', function() {
      var stack = new Stack;
      stack.hello.should.be.a('function')
    });
  });

});