var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { customElement, bindable, bindingMode, LogManager, BindingEngine, inject } from 'aurelia-framework';

export let Pagination = (_dec = customElement('pagination'), _dec2 = inject(BindingEngine), _dec3 = bindable({
  defaultBindingMode: bindingMode.twoWay
}), _dec(_class = _dec2(_class = (_class2 = class Pagination {
  constructor(bindingEngine) {
    _initDefineProp(this, 'currentPage', _descriptor, this);

    _initDefineProp(this, 'pages', _descriptor2, this);

    _initDefineProp(this, 'total', _descriptor3, this);

    _initDefineProp(this, 'itemPerPage', _descriptor4, this);

    _initDefineProp(this, 'pageSize', _descriptor5, this);

    this.numberOfVisiblePages = [];
    this.defaulePageSize = 8;
    this.canBind = true;

    this.logger = LogManager.getLogger('Pagination');
    this.bindingEngine = bindingEngine;
  }
  currentPageChanged(newValue) {
    this.updatePages();
  }

  updatePages() {
    this.numberOfVisiblePages = [];
    if (this.currentPage <= this.pageSize / 2) {
      for (let i = 1; i < this.pageSize; i++) {
        this.numberOfVisiblePages.push(i);
      }
    } else if (this.currentPage >= this.pageSize / 2 && this.currentPage <= this.pages - Math.floor(this.pageSize / 2)) {
      for (let i = this.currentPage - Math.floor(this.pageSize / 2); i <= this.currentPage + Math.floor(this.pageSize / 2); i++) {
        this.numberOfVisiblePages.push(i);
      }
    } else if (this.currentPage > this.pages - Math.floor(this.pageSize / 2)) {
      for (let i = this.pages - this.pageSize < 1 ? 1 : this.pages - this.pageSize; i <= this.pages; i++) {
        this.numberOfVisiblePages.push(i);
      }
    }

    if (this.numberOfVisiblePages.length >= this.pages) {
      this.numberOfVisiblePages = this.numberOfVisiblePages.slice(0, Math.floor(this.total / this.itemPerPage) + (this.total % this.itemPerPage == 0 ? 0 : 1));
    }
  }
  pagesChanged(newValue) {
    if (newValue < this.pageSize) {
      this.pageSize = newValue;
    } else {
      this.pageSize = this.defaulePageSize;
    }
    this.updatePages();
  }

  totalChanged(newValue) {
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
  }
  itemPerPageChanged(n) {
    if (+n > 0) {
      this.currentPage = 1;
      this.pages = Math.floor(this.total / n) + (this.total % n == 0 ? 0 : 1);
    }
  }
  pageSizeChanged(n) {
    if (+n > 0) {
      this.currentPage = 1;
    }
  }

  goToPage(id) {
    this.currentPage = id;
  }
  attached() {}
  bind(context) {
    this.pages = Math.floor(context.total / context.itemperpage) + (context.total % context.itemperpage == 0 ? 0 : 1);
    this.defaulePageSize = context.pagesize;
    this.pageSize = context.pagesize;
    this.logger.debug('paginator success!');
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'currentPage', [_dec3, bindable], {
  enumerable: true,
  initializer: function () {
    return 1;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'pages', [bindable], {
  enumerable: true,
  initializer: function () {
    return 1;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'total', [bindable], {
  enumerable: true,
  initializer: function () {
    return 10;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'itemPerPage', [bindable], {
  enumerable: true,
  initializer: function () {
    return 10;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [bindable], {
  enumerable: true,
  initializer: function () {
    return 8;
  }
})), _class2)) || _class) || _class);