import {
  customElement,
  bindable,
  bindingMode,
  LogManager,
  BindingEngine,
  inject
} from 'aurelia-framework';

@customElement('pagination')
@inject(BindingEngine)
export class Pagination {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  });
  @bindable currentPage = 1;
  @bindable pages = 1;
  @bindable total = 10;
  @bindable itemPerPage = 10;
  numberOfVisiblePages = [];
  arrOfIndex = [];
  constructor(bindingEngine) {
    this.logger = LogManager.getLogger('Pagination');
    this.bindingEngine = bindingEngine;
  }
  currentPageChanged(newValue) {
    this.updatePages();
  }

  updatePages() {
    this.numberOfVisiblePages = [];
    if (this.currentPage <= this.itemPerPage / 2) {
      for (let i = 1; i <= this.itemPerPage; i++) {
        this.numberOfVisiblePages.push(i);
      }

    } else
    if (this.currentPage >= this.itemPerPage / 2 && this.currentPage < this.pages - Math.floor(this.itemPerPage / 2)) {
      for (let i = this.currentPage - Math.floor(this.itemPerPage / 2); i <= this.currentPage + Math.floor(this.itemPerPage / 2); i++) {
        this.numberOfVisiblePages.push(i);
      }
    } else
    if (this.currentPage >= this.pages - Math.floor(this.itemPerPage / 2)) {
      for (let i = this.pages - this.itemPerPage; i <= this.pages; i++) {
        this.numberOfVisiblePages.push(i);
      }
    }

  }
  pagesChanged(newValue) {
    this.updatePages();
  }
  totalChanged(newValue) {
    if (+newValue > 10 && +newValue < parseInt(Math.pow(2, 53)) + 10) {
      this.currentPage = 1;
      this.logger.info('totalChanged : ', newValue);
      this.pages = Math.floor(newValue / this.itemPerPage + 1);
    }
  }
  itemPerPageChanged(n) {
    if (+n > 5) {
      this.currentPage = 1;
      this.pages = Math.floor(this.total / n + 1);
    }

  }

  goToPage(id) {
    this.currentPage = id;
  }
  attached() {

  }
  bind(context) {
    this.numberOfVisiblePages = this.arrOfIndex.slice(0, context.itemperpage);
    this.pages = Math.ceil(context.total / context.itemperpage);
    this.logger.debug('paginator success!');
  }
}
