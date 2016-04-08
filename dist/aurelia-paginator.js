import {customElement,bindable,bindingMode,LogManager,BindingEngine,inject} from 'aurelia-framework';

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
  @bindable pageSize =8;
  numberOfVisiblePages = [];
  arrOfIndex = [];
  constructor(bindingEngine) {
    this.logger = LogManager.getLogger('Pagination');
    this.bindingEngine = bindingEngine;
  }
  currentPageChanged(newValue) {
    this.updatePages();  }

  updatePages() {
    this.numberOfVisiblePages = [];
    if (this.currentPage <= this.pageSize / 2) {
      for (let i = 1; i < this.pageSize; i++) {
        this.numberOfVisiblePages.push(i);
      }

    } else
    if (this.currentPage >= this.pageSize / 2 && this.currentPage < this.pages - Math.floor(this.pageSize / 2)) {
      for (let i = this.currentPage - Math.floor(this.pageSize / 2); i <= this.currentPage + Math.floor(this.pageSize / 2); i++) {
        this.numberOfVisiblePages.push(i);
      }
    } else
    if (this.currentPage >= this.pages - Math.floor(this.pageSize / 2)) {
      for (let i = this.pages - this.pageSize; i <= this.pages; i++) {
        this.numberOfVisiblePages.push(i);
      }
    }

    if(this.numberOfVisiblePages.length>= this.pages){
      this.numberOfVisiblePages = this.numberOfVisiblePages.slice(0, Math.floor(this.total/this.itemPerPage) + ((this.total%this.itemPerPage==0)?0:1));
    }

  }
  pagesChanged(newValue) {
    this.updatePages();
  }

  totalChanged(newValue) {
    if(+newValue>0&& +newValue<=this.itemPerPage){
      this.pages=1;
      this.current=1;
      this.updatePages();
    }
    if (+newValue > 0 && +newValue < parseInt(Math.pow(2, 53)) + 10) {
      this.currentPage = 1;
      this.logger.info('totalChanged : ', newValue);
      this.pages = Math.floor(newValue / this.itemPerPage + 1);

    }
  }
  itemPerPageChanged(n) {
    if (+n > 0) {
      this.currentPage = 1;
      this.pages = Math.floor(this.total / n + 1);
    }

  }
  pageSizeChanged(n) {
    if (+n > 0) {
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
    this.pages = Math.floor( context.total / context.itemperpage ) ;
    this.logger.info('context', context);
    this.pageSize= context.pagesize;
    this.logger.debug('paginator success!');
  }
}

export class TestPagination{
    config={total:100, current:5, size:10};
    changeConfig(){
      this.config.total=  Math.floor(Math.random() * (100 - 50)) + 50;

    }
    constructor() {
      this.current=1;
      this.total=1234;
      this.itemperpage=15;
    }

}
