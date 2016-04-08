import {
  inject
} from 'aurelia-framework';

export class App {
  constructor() {
    this.initData();
    // config paginator

  }
  initData(){
    this.Data=[];
    for (var i = 0; i < 1000; i++) {
      this.Data.push({Id:i, At:`at : + ${new Date()}`, Name:'Tung Pt'});
    }
    this.CallNext();
  }
  CallNext(){
    // config paginator
    this.total = this.Data.length;
    this.pagesize=6;
    this.itemperpage=11;
    this.current=1;
  }
}

export class TakeValueConverter{
  toView(array, from, to){
      return array.slice(from, to);
  }
}
