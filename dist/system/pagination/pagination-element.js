'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var customElement, bindable, bindingMode, LogManager, BindingEngine, inject, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Pagination;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

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
      _export('Pagination', Pagination = (_dec = customElement('pagination'), _dec2 = inject(BindingEngine), _dec3 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec(_class = _dec2(_class = (_class2 = function () {
        function Pagination(bindingEngine) {
          _classCallCheck(this, Pagination);

          _initDefineProp(this, 'currentPage', _descriptor, this);

          _initDefineProp(this, 'pages', _descriptor2, this);

          _initDefineProp(this, 'total', _descriptor3, this);

          _initDefineProp(this, 'itemPerPage', _descriptor4, this);

          this.numberOfVisiblePages = [];
          this.arrOfIndex = [];

          this.logger = LogManager.getLogger('Pagination');
          this.bindingEngine = bindingEngine;
        }

        Pagination.prototype.currentPageChanged = function currentPageChanged(newValue) {
          this.updatePages();
        };

        Pagination.prototype.updatePages = function updatePages() {
          this.numberOfVisiblePages = [];
          if (this.currentPage <= this.itemPerPage / 2) {
            for (var i = 1; i <= this.itemPerPage; i++) {
              this.numberOfVisiblePages.push(i);
            }
          } else if (this.currentPage >= this.itemPerPage / 2 && this.currentPage < this.pages - Math.floor(this.itemPerPage / 2)) {
            for (var _i = this.currentPage - Math.floor(this.itemPerPage / 2); _i <= this.currentPage + Math.floor(this.itemPerPage / 2); _i++) {
              this.numberOfVisiblePages.push(_i);
            }
          } else if (this.currentPage >= this.pages - Math.floor(this.itemPerPage / 2)) {
            for (var _i2 = this.pages - this.itemPerPage; _i2 <= this.pages; _i2++) {
              this.numberOfVisiblePages.push(_i2);
            }
          }
        };

        Pagination.prototype.pagesChanged = function pagesChanged(newValue) {
          this.updatePages();
        };

        Pagination.prototype.totalChanged = function totalChanged(newValue) {
          if (+newValue > 10 && +newValue < parseInt(Math.pow(2, 53)) + 10) {
            this.currentPage = 1;
            this.logger.info('totalChanged : ', newValue);
            this.pages = Math.floor(newValue / this.itemPerPage + 1);
          }
        };

        Pagination.prototype.itemPerPageChanged = function itemPerPageChanged(n) {
          if (+n > 5) {
            this.currentPage = 1;
            this.pages = Math.floor(this.total / n + 1);
          }
        };

        Pagination.prototype.goToPage = function goToPage(id) {
          this.currentPage = id;
        };

        Pagination.prototype.attached = function attached() {};

        Pagination.prototype.bind = function bind(context) {
          this.numberOfVisiblePages = this.arrOfIndex.slice(0, context.itemperpage);
          this.pages = Math.ceil(context.total / context.itemperpage);
          this.logger.debug('paginator success!');
        };

        return Pagination;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'currentPage', [_dec3, bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'pages', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'total', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'itemPerPage', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class) || _class));

      _export('Pagination', Pagination);
    }
  };
});