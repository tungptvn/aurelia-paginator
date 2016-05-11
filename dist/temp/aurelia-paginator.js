'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Pagination = exports.Pagination = (_dec = (0, _aureliaFramework.customElement)('pagination'), _dec2 = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine), _dec3 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = _dec2(_class = (_class2 = function () {
  function Pagination(bindingEngine) {
    _classCallCheck(this, Pagination);

    _initDefineProp(this, 'currentPage', _descriptor, this);

    _initDefineProp(this, 'pages', _descriptor2, this);

    _initDefineProp(this, 'total', _descriptor3, this);

    _initDefineProp(this, 'itemPerPage', _descriptor4, this);

    _initDefineProp(this, 'pageSize', _descriptor5, this);

    this.numberOfVisiblePages = [];
    this.defaulePageSize = 8;

    _initDefineProp(this, 'canBind', _descriptor6, this);

    this.logger = _aureliaFramework.LogManager.getLogger('Pagination');
    this.bindingEngine = bindingEngine;
  }

  Pagination.prototype.currentPageChanged = function currentPageChanged(newValue) {
    this.updatePages();
  };

  Pagination.prototype.updatePages = function updatePages() {
    this.numberOfVisiblePages = [];
    if (this.currentPage <= this.pageSize / 2) {
      console.log('this.numberOfVisiblePages 1', this.numberOfVisiblePages);
      for (var i = 1; i < this.pageSize; i++) {
        this.numberOfVisiblePages.push(i);
      }
    } else if (this.currentPage >= this.pageSize / 2 && this.currentPage <= this.pages - Math.floor(this.pageSize / 2)) {
      console.log('this.numberOfVisiblePages 2', this.numberOfVisiblePages);
      for (var _i = this.currentPage - Math.floor(this.pageSize / 2); _i <= this.currentPage + Math.floor(this.pageSize / 2); _i++) {
        this.numberOfVisiblePages.push(_i);
      }
    } else if (this.currentPage > this.pages - Math.floor(this.pageSize / 2)) {
      console.log('this.numberOfVisiblePages 3', this.numberOfVisiblePages);
      for (var _i2 = this.pages - this.pageSize < 1 ? 1 : this.pages - this.pageSize; _i2 <= this.pages; _i2++) {
        this.numberOfVisiblePages.push(_i2);
      }
    }

    if (this.numberOfVisiblePages.length >= this.pages) {
      console.log('this.numberOfVisiblePages 4', this.numberOfVisiblePages);
      this.numberOfVisiblePages = this.numberOfVisiblePages.slice(0, Math.floor(this.total / this.itemPerPage) + (this.total % this.itemPerPage == 0 ? 0 : 1));
    }
  };

  Pagination.prototype.pagesChanged = function pagesChanged(newValue) {
    if (newValue < this.pageSize) {
      this.pageSize = newValue;
    } else {
      this.pageSize = this.defaulePageSize;
    }
    this.updatePages();
  };

  Pagination.prototype.totalChanged = function totalChanged(newValue) {
    if (+newValue == 0 || !newValue) {
      this.canBind = false;
    } else {
      this.canBind = true;
    }
    if (+newValue > 0 && +newValue <= this.itemPerPage) {
      this.pages = 1;
      this.current = 1;
      this.updatePages();
    }
    if (+newValue > 0 && +newValue < parseInt(Math.pow(2, 53)) + 10) {
      this.currentPage = 1;
      this.pages = Math.floor(newValue / this.itemPerPage) + (newValue % this.itemPerPage == 0 ? 0 : 1);
    }
  };

  Pagination.prototype.itemPerPageChanged = function itemPerPageChanged(n) {
    if (+n > 0) {
      this.currentPage = 1;
      this.pages = Math.floor(this.total / n) + (this.total % n == 0 ? 0 : 1);
    }
  };

  Pagination.prototype.pageSizeChanged = function pageSizeChanged(n) {
    if (+n > 0) {
      this.currentPage = 1;
    }
  };

  Pagination.prototype.goToPage = function goToPage(id) {
    this.currentPage = id;
  };

  Pagination.prototype.attached = function attached() {};

  Pagination.prototype.bind = function bind(context) {
    this.pages = Math.floor(context.total / context.itemperpage) + (context.total % context.itemperpage == 0 ? 0 : 1);
    this.defaulePageSize = context.pagesize;
    this.pageSize = context.pagesize;
    this.logger.debug('paginator success!');
    this.updatePages();
  };

  return Pagination;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'currentPage', [_dec3, _aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'pages', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'total', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'itemPerPage', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 8;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'canBind', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class2)) || _class) || _class);