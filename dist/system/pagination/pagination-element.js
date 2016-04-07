'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var customElement, bindable, bindingMode, LogManager, BindingEngine, inject, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, Pagination;

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
      _export('Pagination', Pagination = (_dec = customElement('pagination'), _dec2 = inject(BindingEngine), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
        function Pagination(bindingEngine) {
          var _this = this;

          _classCallCheck(this, Pagination);

          _initDefineProp(this, 'currentPage', _descriptor, this);

          _initDefineProp(this, 'pages', _descriptor2, this);

          _initDefineProp(this, 'pageSize', _descriptor3, this);

          _initDefineProp(this, 'total', _descriptor4, this);

          _initDefineProp(this, 'itemPerPage', _descriptor5, this);

          this.numberOfVisiblePages = [];
          this.arrOfIndex = [];

          this.logger = LogManager.getLogger('Pagination');
          this.bindingEngine = bindingEngine;
          this.bindingEngine.propertyObserver(this, 'pageSize').subscribe(function (n, o) {
            _this.logger.info('watch page Size', n);
          });
          this.init();
        }

        Pagination.prototype.currentPageChanged = function currentPageChanged(newValue) {
          this.numberOfVisiblePages = this.arrOfIndex.slice(this.currentPage < this.itemPerPage / 2 ? 0 : this.currentPage - this.itemPerPage / 2, this.currentPage - this.itemPerPage / 2 < 0 ? this.itemPerPage : this.currentPage - this.itemPerPage / 2 + this.itemPerPage);
          if (this.currentPage > this.pages - this.itemPerPage / 2) {
            this.numberOfVisiblePages = this.arrOfIndex.slice(this.pages - this.itemPerPage, this.pages);
          }
          this.logger.info('arrOfIndex', this.arrOfIndex);

          this.logger.info('numberOfVisiblePages', this.numberOfVisiblePages);
        };

        Pagination.prototype.pageSizeChanged = function pageSizeChanged(newValue) {};

        Pagination.prototype.totalChanged = function totalChanged(newValue) {
          this.currentPage = 1;
          this.logger.info('totalChanged : ', newValue);
          this.pages = Math.floor(newValue / this.itemPerPage + 1);
          this.initIndex(this.pages);
        };

        Pagination.prototype.itemPerPageChanged = function itemPerPageChanged(n) {
          this.currentPage = 1;
          this.logger.info('itemPerPageChanged :', n);
          this.pages = Math.floor(this.total / n + 1);
          this.initIndex(this.pages);
        };

        Pagination.prototype.clicked = function clicked() {
          alert('clicked');
        };

        Pagination.prototype.goToPage = function goToPage(id) {
          this.currentPage = id;
        };

        Pagination.prototype.attached = function attached() {};

        Pagination.prototype.initIndex = function initIndex(total) {
          this.arrOfIndex = [];
          for (var i = 1; i <= total; i++) {
            this.arrOfIndex.push(i);
          }
          this.logger.info('numberOfVisiblePages', this.numberOfVisiblePages);
        };

        Pagination.prototype.bind = function bind(context) {
          this.logger.info('context', context);
          this.initIndex(Math.ceil(context.total / context.itemperpage));
          this.numberOfVisiblePages = this.arrOfIndex.slice(0, context.itemperpage);
          this.pages = Math.ceil(context.total / context.itemperpage);
        };

        Pagination.prototype.init = function init() {
          this.currentPage = 1;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'total', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'itemPerPage', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class) || _class));

      _export('Pagination', Pagination);
    }
  };
});