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
    total: any;
    itemPerPage: any;
    pageSize: any;
    numberOfVisiblePages: any;
    defaulePageSize: any;
    canBind: any;
    constructor(bindingEngine: any);
    currentPageChanged(newValue: any): any;
    updatePages(): any;
    pagesChanged(newValue: any): any;
    totalChanged(newValue: any): any;
    itemPerPageChanged(n: any): any;
    pageSizeChanged(n: any): any;
    goToPage(id: any): any;
    attached(): any;
    bind(context: any): any;
  }
}