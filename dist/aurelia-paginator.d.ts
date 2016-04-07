declare module 'aurelia-paginator' {
  import {
    customElement,
    bindable,
    bindingMode,
    LogManager,
    BindingEngine,
    inject
  } from 'aurelia-framework';
  export class Pagination {
    currentPage: any;
    pages: any;
    pageSize: any;
    total: any;
    itemPerPage: any;
    numberOfVisiblePages: any;
    arrOfIndex: any;
    constructor(bindingEngine: any);
    currentPageChanged(newValue: any): any;
    pageSizeChanged(newValue: any): any;
    
    //alert('i changed');
    totalChanged(newValue: any): any;
    itemPerPageChanged(n: any): any;
    clicked(): any;
    goToPage(id: any): any;
    
    //alert(this.currentPage);
    attached(): any;
    initIndex(total: any): any;
    bind(context: any): any;
    init(): any;
  }
  
  //this.initIndex(this.total);
  //this.numberOfVisiblePages = this.arrOfIndex.slice(0, this.itemPerPage);
  //this.logger.info('total ,pages , itemPerPage', this.pages, this.total, this.itemPerPage );
  export class TestPagination {
    config: any;
    changeConfig(): any;
    constructor();
  }
}