"use strict";

System.register([], function (_export, _context) {
  var TestPagination;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("TestPagination", TestPagination = function () {
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
      }());

      _export("TestPagination", TestPagination);
    }
  };
});