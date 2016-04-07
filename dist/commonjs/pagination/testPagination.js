"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestPagination = exports.TestPagination = function () {
  TestPagination.prototype.changeConfig = function changeConfig() {
    this.config.total = Math.floor(Math.random() * (100 - 50)) + 50;
  };

  function TestPagination() {
    _classCallCheck(this, TestPagination);

    this.config = { total: 100, current: 5, size: 10 };

    this.current = 1;
    this.total = 1234;
    this.itemperpage = 15;
  }

  return TestPagination;
}();