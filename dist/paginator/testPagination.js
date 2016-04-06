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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRvci90ZXN0UGFnaW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxjQUFjOzs7Ozs7Ozs7QUFBZCxvQkFBYztxQkFBZCxjQUFjOztpQkFFWCx3QkFBRTtBQUNaLGdCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBLEFBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztXQUVqRTs7O0FBQ1UsaUJBTkYsY0FBYyxHQU1UO2dDQU5MLGNBQWM7O2VBQ3ZCLE1BQU0sR0FBQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFDOztBQU1wQyxjQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztBQUNmLGNBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDO1NBQ3JCOztlQVZRLGNBQWMiLCJmaWxlIjoicGFnaW5hdG9yL3Rlc3RQYWdpbmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRlc3RQYWdpbmF0aW9ue1xyXG4gICAgY29uZmlnPXt0b3RhbDoxMDAsIGN1cnJlbnQ6NSwgc2l6ZToxMH07XHJcbiAgICBjaGFuZ2VDb25maWcoKXtcclxuICAgICAgdGhpcy5jb25maWcudG90YWw9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gNTApKSArIDUwO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnQ9MTtcclxuICAgICAgdGhpcy50b3RhbD0xMjM0O1xyXG4gICAgICB0aGlzLml0ZW1wZXJwYWdlPTE1O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
