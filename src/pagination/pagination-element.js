import {customElement, bindable, bindingMode ,LogManager, BindingEngine, inject} from 'aurelia-framework';

@customElement('pagination')
//@bindable({ name: 'pagination', attribute: 'data', defaultBindingMode: bindingMode.twoWay})
@inject(BindingEngine)
export class Pagination {
  @bindable({defaultBindingMode: bindingMode.twoWay});
  @bindable currentPage = 1;
  @bindable pages = 1;
  @bindable pageSize=10;
  @bindable total=10;
  @bindable itemPerPage=10;
  numberOfVisiblePages=[];
  arrOfIndex=[];
  constructor(bindingEngine) {
    this.logger = LogManager.getLogger('Pagination');
    this.bindingEngine = bindingEngine;
    this.bindingEngine.propertyObserver(this,'pageSize').subscribe((n,o)=>{this.logger.info('watch page Size' , n) });
    this.init();
  }
  currentPageChanged(newValue){
    this.numberOfVisiblePages = this.arrOfIndex.slice( (this.currentPage< this.itemPerPage/2)? 0:(this.currentPage-this.itemPerPage/2) , (this.currentPage-this.itemPerPage/2<0)? this.itemPerPage: (this.currentPage-this.itemPerPage/2)+ this.itemPerPage  );
    if(this.currentPage> this.pages-this.itemPerPage/2){
      this.numberOfVisiblePages=this.arrOfIndex.slice(this.pages-this.itemPerPage, this.pages);
    }
    this.logger.info('arrOfIndex', this.arrOfIndex);
    //this.numberOfVisiblePages = this.arrOfIndex.slice(0,10);
    this.logger.info('numberOfVisiblePages', this.numberOfVisiblePages);
  }
  pageSizeChanged(newValue){
    //alert('i changed');
  }
  totalChanged(newValue){
    this.currentPage=1;
    this.logger.info('totalChanged : ', newValue );
    this.pages= Math.floor(newValue/this.itemPerPage+1);
    this.initIndex(this.pages);
  }
  itemPerPageChanged(n){
    this.currentPage=1;
    this.logger.info('itemPerPageChanged :' , n );
    this.pages= Math.floor(this.total/n+1);
      this.initIndex(this.pages);
  }
  clicked(){
    alert('clicked');
  }
  goToPage(id){
    this.currentPage = id;
    //alert(this.currentPage);
  }
  attached(){

  }
  initIndex(total){
    this.arrOfIndex=[];
    for(let i = 1 ;i<= total; i++){
    this.arrOfIndex.push(i);
    }
    this.logger.info('numberOfVisiblePages', this.numberOfVisiblePages);
  }
  bind(context){
    this.logger.info('context',context);
    this.initIndex(Math.ceil(context.total/context.itemperpage));
    this.numberOfVisiblePages = this.arrOfIndex.slice(0, context.itemperpage);
    this.pages= Math.ceil(context.total/context.itemperpage);
  }

  init(){
    this.currentPage=1;
    //this.initIndex(this.total);
    //this.numberOfVisiblePages = this.arrOfIndex.slice(0, this.itemPerPage);

    //this.logger.info('total ,pages , itemPerPage', this.pages, this.total, this.itemPerPage );
  }
}
