System.register([], function (_export) {
  "use strict";

  var TestPagination;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      TestPagination = (function () {
        _createClass(TestPagination, [{
          key: "changeConfig",
          value: function changeConfig() {
            this.config.total = Math.floor(Math.random() * (100 - 50)) + 50;
          }
        }]);

        function TestPagination() {
          _classCallCheck(this, TestPagination);

          this.config = { total: 100, current: 5, size: 10 };

          this.current = 1;
          this.total = 1234;
          this.itemperpage = 15;
        }

        return TestPagination;
      })();

      _export("TestPagination", TestPagination);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24vdGVzdFBhZ2luYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsY0FBYzs7Ozs7Ozs7O0FBQWQsb0JBQWM7cUJBQWQsY0FBYzs7aUJBRVgsd0JBQUU7QUFDWixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQSxBQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7V0FFakU7OztBQUNVLGlCQU5GLGNBQWMsR0FNVDtnQ0FOTCxjQUFjOztlQUN2QixNQUFNLEdBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFDLEVBQUUsRUFBQzs7QUFNcEMsY0FBSSxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUM7QUFDZixjQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztBQUNoQixjQUFJLENBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQztTQUNyQjs7ZUFWUSxjQUFjIiwiZmlsZSI6InBhZ2luYXRpb24vdGVzdFBhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGVzdFBhZ2luYXRpb257XHJcbiAgICBjb25maWc9e3RvdGFsOjEwMCwgY3VycmVudDo1LCBzaXplOjEwfTtcclxuICAgIGNoYW5nZUNvbmZpZygpe1xyXG4gICAgICB0aGlzLmNvbmZpZy50b3RhbD0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAgLSA1MCkpICsgNTA7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudD0xO1xyXG4gICAgICB0aGlzLnRvdGFsPTEyMzQ7XHJcbiAgICAgIHRoaXMuaXRlbXBlcnBhZ2U9MTU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
