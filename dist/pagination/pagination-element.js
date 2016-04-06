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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24vcGFnaW5hdGlvbi1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrRUFLYSxVQUFVOzs7Ozs7Ozs7O3dDQUxmLGFBQWE7bUNBQUUsUUFBUTtzQ0FBRSxXQUFXO3FDQUFFLFVBQVU7d0NBQUUsYUFBYTtpQ0FBRSxNQUFNOzs7QUFLbEUsZ0JBQVU7Ozs7OEJBQVYsVUFBVTs7dUJBRXBCLFFBQVEsRUFEUixRQUFRLENBQUMsRUFBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFDLENBQUM7O21CQUMzQixDQUFDOzs7Ozt1QkFDeEIsUUFBUTs7bUJBQVMsQ0FBQzs7Ozs7dUJBQ2xCLFFBQVE7O21CQUFVLEVBQUU7Ozs7O3VCQUNwQixRQUFROzs7Ozt1QkFDUixRQUFROzttQkFBYSxFQUFFOzs7OztBQUdiLGlCQVRBLFVBQVUsQ0FTVCxhQUFhLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztlQUYzQixvQkFBb0IsR0FBQyxFQUFFO2VBQ3ZCLFVBQVUsR0FBQyxFQUFFOztBQUVYLGNBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqRCxjQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyxjQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFHO0FBQUMsa0JBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRyxDQUFDLENBQUMsQ0FBQTtXQUFFLENBQUMsQ0FBQztBQUNsSCxjQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjs7OEJBZFUsVUFBVTs7aUJBZUgsNEJBQUMsUUFBUSxFQUFDO0FBQzFCLGdCQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUUsQUFBQyxJQUFJLENBQUMsV0FBVyxHQUFFLElB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RyxnQkFBRTtBQUNKLGdCQUFJLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQztXQUtwQjs7OzBCQWxFVSxVQUFVO0FBQVYsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUNULFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FIdEIsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUdmLFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVSIsImZpbGUiOiJwYWdpbmF0aW9uL3BhZ2luYXRpb24tZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGJpbmRpbmdNb2RlICxMb2dNYW5hZ2VyLCBCaW5kaW5nRW5naW5lLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdwYWdpbmF0aW9uJylcclxuLy9AYmluZGFibGUoeyBuYW1lOiAncGFnaW5hdGlvbicsIGF0dHJpYnV0ZTogJ2RhdGEnLCBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheX0pXHJcbkBpbmplY3QoQmluZGluZ0VuZ2luZSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb24ge1xyXG4gIEBiaW5kYWJsZSh7ZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXl9KTtcclxuICBAYmluZGFibGUgY3VycmVudFBhZ2UgPSAxO1xyXG4gIEBiaW5kYWJsZSBwYWdlcyA9IDE7XHJcbiAgQGJpbmRhYmxlIHBhZ2VTaXplPTEwO1xyXG4gIEBiaW5kYWJsZSB0b3RhbDtcclxuICBAYmluZGFibGUgaXRlbVBlclBhZ2U9MTA7XHJcbiAgbnVtYmVyT2ZWaXNpYmxlUGFnZXM9W107XHJcbiAgYXJyT2ZJbmRleD1bXTtcclxuICBjb25zdHJ1Y3RvcihiaW5kaW5nRW5naW5lKSB7XHJcbiAgICB0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCdQYWdpbmF0aW9uJyk7XHJcbiAgICB0aGlzLmJpbmRpbmdFbmdpbmUgPSBiaW5kaW5nRW5naW5lO1xyXG4gICAgdGhpcy5iaW5kaW5nRW5naW5lLnByb3BlcnR5T2JzZXJ2ZXIodGhpcywncGFnZVNpemUnKS5zdWJzY3JpYmUoKG4sbyk9Pnt0aGlzLmxvZ2dlci5pbmZvKCd3YXRjaCBwYWdlIFNpemUnICwgbikgfSk7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgY3VycmVudFBhZ2VDaGFuZ2VkKG5ld1ZhbHVlKXtcclxuICAgIHRoaXMubnVtYmVyT2ZWaXNpYmxlUGFnZXMgPSB0aGlzLmFyck9mSW5kZXguc2xpY2UoICh0aGlzLmN1cnJlbnRQYWdlPCB0aGlzLml0ZW1QZXJQYWdlLzIpPyAwOih0aGlzLmN1cnJlbnRQYWdlLXRoaXMuaXRlbVBlclBhZ2UvMikgLCAodGhpcy5jdXJyZW50UGFnZS10aGlzLml0ZW1QZXJQYWdlLzI8MCk/IHRoaXMuaXRlbVBlclBhZ2U6ICh0aGlzLmN1cnJlbnRQYWdlLXRoaXMuaXRlbVBlclBhZ2UvMikrIHRoaXMuaXRlbVBlclBhZ2UgICk7XHJcbiAgICBpZih0aGlzLmN1cnJlbnRQYWdlPiB0aGlzLnBhZ2VzLXRoaXMuaXRlbVBlclBhZ2UvMil7XHJcbiAgICAgIHRoaXMubnVtYmVyT2ZWaXNpYmxlUGFnZXM9dGhpcy5hcnJPZkluZGV4LnNsaWNlKHRoaXMucGFnZXMtdGhpcy5pdGVtUGVyUGFnZSwgdGhpcy5wYWdlcyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdhcnJPZkluZGV4JywgdGhpcy5hcnJPZkluZGV4KTtcclxuICAgIC8vdGhpcy5udW1iZXJPZlZpc2libGVQYWdlcyA9IHRoaXMuYXJyT2ZJbmRleC5zbGljZSgwLDEwKTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ251bWJlck9mVmlzaWJsZVBhZ2VzJywgdGhpcy5udW1iZXJPZlZpc2libGVQYWdlcyk7XHJcbiAgfVxyXG4gIHBhZ2VTaXplQ2hhbmdlZChuZXdWYWx1ZSl7XHJcbiAgICAvL2FsZXJ0KCdpIGNoYW5nZWQnKTtcclxuICB9XHJcbiAgdG90YWxDaGFuZ2VkKG5ld1ZhbHVlKXtcclxuICAgIHRoaXMuY3VycmVudFBhZ2U9MTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3RvdGFsQ2hhbmdlZCA6ICcsIG5ld1ZhbHVlICk7XHJcbiAgICB0aGlzLnBhZ2VzPSBNYXRoLmNlaWwobmV3VmFsdWUvdGhpcy5pdGVtUGVyUGFnZSk7XHJcbiAgICB0aGlzLmluaXRJbmRleCh0aGlzLnBhZ2VzKTtcclxuICB9XHJcbiAgaXRlbVBlclBhZ2VDaGFuZ2VkKG4pe1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnaXRlbVBlclBhZ2VDaGFuZ2VkIDonICwgbiApO1xyXG4gIH1cclxuICBjbGlja2VkKCl7XHJcbiAgICBhbGVydCgnY2xpY2tlZCcpO1xyXG4gIH1cclxuICBnb1RvUGFnZShpZCl7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gaWQ7XHJcbiAgICAvL2FsZXJ0KHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gIH1cclxuICBhdHRhY2hlZCgpe1xyXG5cclxuICB9XHJcbiAgaW5pdEluZGV4KHRvdGFsKXtcclxuICAgIHRoaXMuYXJyT2ZJbmRleD1bXTtcclxuICAgIGZvcihsZXQgaSA9IDEgO2k8PSB0b3RhbDsgaSsrKXtcclxuICAgIHRoaXMuYXJyT2ZJbmRleC5wdXNoKGkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnbnVtYmVyT2ZWaXNpYmxlUGFnZXMnLCB0aGlzLm51bWJlck9mVmlzaWJsZVBhZ2VzKTtcclxuICB9XHJcbiAgYmluZChjb250ZXh0KXtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2NvbnRleHQnLGNvbnRleHQpO1xyXG4gICAgdGhpcy5pbml0SW5kZXgoTWF0aC5jZWlsKGNvbnRleHQudG90YWwvY29udGV4dC5pdGVtcGVycGFnZSkpO1xyXG4gICAgdGhpcy5udW1iZXJPZlZpc2libGVQYWdlcyA9IHRoaXMuYXJyT2ZJbmRleC5zbGljZSgwLCBjb250ZXh0Lml0ZW1wZXJwYWdlKTtcclxuICAgIHRoaXMucGFnZXM9IE1hdGguY2VpbChjb250ZXh0LnRvdGFsL2NvbnRleHQuaXRlbXBlcnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZT0xO1xyXG4gICAgLy90aGlzLmluaXRJbmRleCh0aGlzLnRvdGFsKTtcclxuICAgIC8vdGhpcy5udW1iZXJPZlZpc2libGVQYWdlcyA9IHRoaXMuYXJyT2ZJbmRleC5zbGljZSgwLCB0aGlzLml0ZW1QZXJQYWdlKTtcclxuXHJcbiAgICAvL3RoaXMubG9nZ2VyLmluZm8oJ3RvdGFsICxwYWdlcyAsIGl0ZW1QZXJQYWdlJywgdGhpcy5wYWdlcywgdGhpcy50b3RhbCwgdGhpcy5pdGVtUGVyUGFnZSApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
