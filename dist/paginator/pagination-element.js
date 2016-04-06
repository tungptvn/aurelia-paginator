System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customElement, bindable, bindingMode, LogManager, BindingEngine, inject, Pagination;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      LogManager = _aureliaFramework.LogManager;
      BindingEngine = _aureliaFramework.BindingEngine;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      Pagination = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Pagination, [{
          key: 'currentPage',
          decorators: [bindable, bindable({ defaultBindingMode: bindingMode.twoWay })],
          initializer: function initializer() {
            return 1;
          },
          enumerable: true
        }, {
          key: 'pages',
          decorators: [bindable],
          initializer: function initializer() {
            return 1;
          },
          enumerable: true
        }, {
          key: 'pageSize',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }, {
          key: 'total',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'itemPerPage',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Pagination(bindingEngine) {
          var _this = this;

          _classCallCheck(this, _Pagination);

          _defineDecoratedPropertyDescriptor(this, 'currentPage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pages', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'total', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'itemPerPage', _instanceInitializers);

          this.numberOfVisiblePages = [];
          this.arrOfIndex = [];

          this.logger = LogManager.getLogger('Pagination');
          this.bindingEngine = bindingEngine;
          this.bindingEngine.propertyObserver(this, 'pageSize').subscribe(function (n, o) {
            _this.logger.info('watch page Size', n);
          });
          this.init();
        }

        _createDecoratedClass(Pagination, [{
          key: 'currentPageChanged',
          value: function currentPageChanged(newValue) {
            this.numberOfVisiblePages = this.arrOfIndex.slice(this.currentPage < this.itemPerPage / 2 ? 0 : this.currentPage - this.itemPerPage / 2, this.currentPage - this.itemPerPage / 2 < 0 ? this.itemPerPage : this.currentPage - this.itemPerPage / 2 + this.itemPerPage);
            if (this.currentPage > this.pages - this.itemPerPage / 2) {
              this.numberOfVisiblePages = this.arrOfIndex.slice(this.pages - this.itemPerPage, this.pages);
            }
            this.logger.info('arrOfIndex', this.arrOfIndex);

            this.logger.info('numberOfVisiblePages', this.numberOfVisiblePages);
          }
        }, {
          key: 'pageSizeChanged',
          value: function pageSizeChanged(newValue) {}
        }, {
          key: 'totalChanged',
          value: function totalChanged(newValue) {
            this.currentPage = 1;
            this.logger.info('totalChanged : ', newValue);
            this.pages = Math.ceil(newValue / this.itemPerPage);
            this.initIndex(this.pages);
          }
        }, {
          key: 'itemPerPageChanged',
          value: function itemPerPageChanged(n) {
            this.logger.info('itemPerPageChanged :', n);
          }
        }, {
          key: 'clicked',
          value: function clicked() {
            alert('clicked');
          }
        }, {
          key: 'goToPage',
          value: function goToPage(id) {
            this.currentPage = id;
          }
        }, {
          key: 'attached',
          value: function attached() {}
        }, {
          key: 'initIndex',
          value: function initIndex(total) {
            this.arrOfIndex = [];
            for (var i = 1; i <= total; i++) {
              this.arrOfIndex.push(i);
            }
            this.logger.info('numberOfVisiblePages', this.numberOfVisiblePages);
          }
        }, {
          key: 'bind',
          value: function bind(context) {
            this.logger.info('context', context);
            this.initIndex(Math.ceil(context.total / context.itemperpage));
            this.numberOfVisiblePages = this.arrOfIndex.slice(0, context.itemperpage);
            this.pages = Math.ceil(context.total / context.itemperpage);
          }
        }, {
          key: 'init',
          value: function init() {
            this.currentPage = 1;
          }
        }], null, _instanceInitializers);

        var _Pagination = Pagination;
        Pagination = inject(BindingEngine)(Pagination) || Pagination;
        Pagination = customElement('pagination')(Pagination) || Pagination;
        return Pagination;
      })();

      _export('Pagination', Pagination);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRvci9wYWdpbmF0aW9uLWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytFQUthLFVBQVU7Ozs7Ozs7Ozs7d0NBTGYsYUFBYTttQ0FBRSxRQUFRO3NDQUFFLFdBQVc7cUNBQUUsVUFBVTt3Q0FBRSxhQUFhO2lDQUFFLE1BQU07OztBQUtsRSxnQkFBVTs7Ozs4QkFBVixVQUFVOzt1QkFFcEIsUUFBUSxFQURSLFFBQVEsQ0FBQyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUMsQ0FBQzs7bUJBQzNCLENBQUM7Ozs7O3VCQUN4QixRQUFROzttQkFBUyxDQUFDOzs7Ozt1QkFDbEIsUUFBUTs7bUJBQVUsRUFBRTs7Ozs7dUJBQ3BCLFFBQVE7Ozs7O3VCQUNSLFFBQVE7O21CQUFhLEVBQUU7Ozs7O0FBR2IsaUJBVEEsVUFBVSxDQVNULGFBQWEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O2VBRjNCLG9CQUFvQixHQUFDLEVBQUU7ZUFDdkIsVUFBVSxHQUFDLEVBQUU7O0FBRVgsY0FBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2pELGNBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLGNBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUc7QUFBQyxrQkFBSyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFHLENBQUMsQ0FBQyxDQUFBO1dBQUUsQ0FBQyxDQUFDO0FBQ2xILGNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiOzs4QkFkVSxVQUFVOztpQkFlSCw0QkFBQyxRQUFRLEVBQUM7QUFDMUIsZ0JBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBRSxBQUFDLElBQUksQ0FBQyxXQUFXLEdBQUUsSUFB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LGdCQUFFO0FBQ0osZ0JBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDO1dBS3BCOzs7MEJBbEVVLFVBQVU7QUFBVixrQkFBVSxHQUR0QixNQUFNLENBQUMsYUFBYSxDQUFDLENBQ1QsVUFBVSxLQUFWLFVBQVU7QUFBVixrQkFBVSxHQUh0QixhQUFhLENBQUMsWUFBWSxDQUFDLENBR2YsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVIiwiZmlsZSI6InBhZ2luYXRvci9wYWdpbmF0aW9uLWVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSAsTG9nTWFuYWdlciwgQmluZGluZ0VuZ2luZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgncGFnaW5hdGlvbicpXHJcbi8vQGJpbmRhYmxlKHsgbmFtZTogJ3BhZ2luYXRpb24nLCBhdHRyaWJ1dGU6ICdkYXRhJywgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXl9KVxyXG5AaW5qZWN0KEJpbmRpbmdFbmdpbmUpXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIHtcclxuICBAYmluZGFibGUoe2RlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5fSk7XHJcbiAgQGJpbmRhYmxlIGN1cnJlbnRQYWdlID0gMTtcclxuICBAYmluZGFibGUgcGFnZXMgPSAxO1xyXG4gIEBiaW5kYWJsZSBwYWdlU2l6ZT0xMDtcclxuICBAYmluZGFibGUgdG90YWw7XHJcbiAgQGJpbmRhYmxlIGl0ZW1QZXJQYWdlPTEwO1xyXG4gIG51bWJlck9mVmlzaWJsZVBhZ2VzPVtdO1xyXG4gIGFyck9mSW5kZXg9W107XHJcbiAgY29uc3RydWN0b3IoYmluZGluZ0VuZ2luZSkge1xyXG4gICAgdGhpcy5sb2dnZXIgPSBMb2dNYW5hZ2VyLmdldExvZ2dlcignUGFnaW5hdGlvbicpO1xyXG4gICAgdGhpcy5iaW5kaW5nRW5naW5lID0gYmluZGluZ0VuZ2luZTtcclxuICAgIHRoaXMuYmluZGluZ0VuZ2luZS5wcm9wZXJ0eU9ic2VydmVyKHRoaXMsJ3BhZ2VTaXplJykuc3Vic2NyaWJlKChuLG8pPT57dGhpcy5sb2dnZXIuaW5mbygnd2F0Y2ggcGFnZSBTaXplJyAsIG4pIH0pO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG4gIGN1cnJlbnRQYWdlQ2hhbmdlZChuZXdWYWx1ZSl7XHJcbiAgICB0aGlzLm51bWJlck9mVmlzaWJsZVBhZ2VzID0gdGhpcy5hcnJPZkluZGV4LnNsaWNlKCAodGhpcy5jdXJyZW50UGFnZTwgdGhpcy5pdGVtUGVyUGFnZS8yKT8gMDoodGhpcy5jdXJyZW50UGFnZS10aGlzLml0ZW1QZXJQYWdlLzIpICwgKHRoaXMuY3VycmVudFBhZ2UtdGhpcy5pdGVtUGVyUGFnZS8yPDApPyB0aGlzLml0ZW1QZXJQYWdlOiAodGhpcy5jdXJyZW50UGFnZS10aGlzLml0ZW1QZXJQYWdlLzIpKyB0aGlzLml0ZW1QZXJQYWdlICApO1xyXG4gICAgaWYodGhpcy5jdXJyZW50UGFnZT4gdGhpcy5wYWdlcy10aGlzLml0ZW1QZXJQYWdlLzIpe1xyXG4gICAgICB0aGlzLm51bWJlck9mVmlzaWJsZVBhZ2VzPXRoaXMuYXJyT2ZJbmRleC5zbGljZSh0aGlzLnBhZ2VzLXRoaXMuaXRlbVBlclBhZ2UsIHRoaXMucGFnZXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnYXJyT2ZJbmRleCcsIHRoaXMuYXJyT2ZJbmRleCk7XHJcbiAgICAvL3RoaXMubnVtYmVyT2ZWaXNpYmxlUGFnZXMgPSB0aGlzLmFyck9mSW5kZXguc2xpY2UoMCwxMCk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdudW1iZXJPZlZpc2libGVQYWdlcycsIHRoaXMubnVtYmVyT2ZWaXNpYmxlUGFnZXMpO1xyXG4gIH1cclxuICBwYWdlU2l6ZUNoYW5nZWQobmV3VmFsdWUpe1xyXG4gICAgLy9hbGVydCgnaSBjaGFuZ2VkJyk7XHJcbiAgfVxyXG4gIHRvdGFsQ2hhbmdlZChuZXdWYWx1ZSl7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlPTE7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCd0b3RhbENoYW5nZWQgOiAnLCBuZXdWYWx1ZSApO1xyXG4gICAgdGhpcy5wYWdlcz0gTWF0aC5jZWlsKG5ld1ZhbHVlL3RoaXMuaXRlbVBlclBhZ2UpO1xyXG4gICAgdGhpcy5pbml0SW5kZXgodGhpcy5wYWdlcyk7XHJcbiAgfVxyXG4gIGl0ZW1QZXJQYWdlQ2hhbmdlZChuKXtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2l0ZW1QZXJQYWdlQ2hhbmdlZCA6JyAsIG4gKTtcclxuICB9XHJcbiAgY2xpY2tlZCgpe1xyXG4gICAgYWxlcnQoJ2NsaWNrZWQnKTtcclxuICB9XHJcbiAgZ29Ub1BhZ2UoaWQpe1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IGlkO1xyXG4gICAgLy9hbGVydCh0aGlzLmN1cnJlbnRQYWdlKTtcclxuICB9XHJcbiAgYXR0YWNoZWQoKXtcclxuXHJcbiAgfVxyXG4gIGluaXRJbmRleCh0b3RhbCl7XHJcbiAgICB0aGlzLmFyck9mSW5kZXg9W107XHJcbiAgICBmb3IobGV0IGkgPSAxIDtpPD0gdG90YWw7IGkrKyl7XHJcbiAgICB0aGlzLmFyck9mSW5kZXgucHVzaChpKTtcclxuICAgIH1cclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ251bWJlck9mVmlzaWJsZVBhZ2VzJywgdGhpcy5udW1iZXJPZlZpc2libGVQYWdlcyk7XHJcbiAgfVxyXG4gIGJpbmQoY29udGV4dCl7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjb250ZXh0Jyxjb250ZXh0KTtcclxuICAgIHRoaXMuaW5pdEluZGV4KE1hdGguY2VpbChjb250ZXh0LnRvdGFsL2NvbnRleHQuaXRlbXBlcnBhZ2UpKTtcclxuICAgIHRoaXMubnVtYmVyT2ZWaXNpYmxlUGFnZXMgPSB0aGlzLmFyck9mSW5kZXguc2xpY2UoMCwgY29udGV4dC5pdGVtcGVycGFnZSk7XHJcbiAgICB0aGlzLnBhZ2VzPSBNYXRoLmNlaWwoY29udGV4dC50b3RhbC9jb250ZXh0Lml0ZW1wZXJwYWdlKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuY3VycmVudFBhZ2U9MTtcclxuICAgIC8vdGhpcy5pbml0SW5kZXgodGhpcy50b3RhbCk7XHJcbiAgICAvL3RoaXMubnVtYmVyT2ZWaXNpYmxlUGFnZXMgPSB0aGlzLmFyck9mSW5kZXguc2xpY2UoMCwgdGhpcy5pdGVtUGVyUGFnZSk7XHJcblxyXG4gICAgLy90aGlzLmxvZ2dlci5pbmZvKCd0b3RhbCAscGFnZXMgLCBpdGVtUGVyUGFnZScsIHRoaXMucGFnZXMsIHRoaXMudG90YWwsIHRoaXMuaXRlbVBlclBhZ2UgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
