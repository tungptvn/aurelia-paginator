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
  @bindable pageSize =8;
  numberOfVisiblePages = [];
  defaulePageSize=8;
  canBind=true;
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
    if (this.currentPage >= this.pageSize / 2 && this.currentPage <= this.pages - Math.floor(this.pageSize / 2)) {
      for (let i = this.currentPage - Math.floor(this.pageSize / 2); i <= this.currentPage + Math.floor(this.pageSize / 2); i++) {
          this.numberOfVisiblePages.push(i);
      }
    } else
    if (this.currentPage > this.pages - Math.floor(this.pageSize / 2)) {
      for (let i = ((this.pages - this.pageSize<1)?1:this.pages - this.pageSize) ; i <= this.pages; i++) {
        this.numberOfVisiblePages.push(i);
      }
    }

    if(this.numberOfVisiblePages.length>= this.pages){
      this.numberOfVisiblePages = this.numberOfVisiblePages.slice(0, Math.floor(this.total/this.itemPerPage) + ((this.total%this.itemPerPage==0)?0:1));
    }

  }
  pagesChanged(newValue) {
    if(newValue<this.pageSize){
      this.pageSize=newValue;
    }else{
      this.pageSize=this.defaulePageSize;
    }
    this.updatePages();
  }

  totalChanged(newValue) {
    if(+newValue==0||!newValue){
      this.canBind=false;
    }
    else{
      this.canBind=true;
    }
    if(+newValue>0&& +newValue<=this.itemPerPage){
      this.pages=1;
      this.current=1;
      this.updatePages();
    }
    if (+newValue > 0 && +newValue < parseInt(Math.pow(2, 53)) + 10) {
      this.currentPage = 1;
      this.pages = Math.floor(newValue / this.itemPerPage )+ ((newValue % this.itemPerPage==0)?0:1);
    }
  }
  itemPerPageChanged(n) {
    if (+n > 0) {
      this.currentPage = 1;
      this.pages = Math.floor(this.total / n)+ ((this.total % n==0)?0:1);
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
  attached() {

  }
  bind(context) {
    this.pages = Math.floor( context.total / context.itemperpage )+ ((context.total % context.itemperpage==0)?0:1) ;
    this.defaulePageSize= context.pagesize;
    this.pageSize=context.pagesize;
    this.logger.debug('paginator success!');
  }
}
