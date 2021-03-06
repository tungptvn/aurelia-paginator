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
    for (var i = 1; i <= 1234; i++) {
      this.Data.push({Id:i, At:`at : + ${new Date()}`, Name:'Tung Pt'});
    }
    this.CallNext();
  }
  CallNext(){
    // config paginator
    this.total = this.Data.length;
    this.pagesize=11;
    this.itemperpage=10;
    this.current=1;
  }
}

export class TakeValueConverter{
  toView(array, from, to){
      return array.slice(from, to);
  }
}

export class FilterByIdValueConverter{
  toView(array, value){

    if(value)   array= array.filter( x=>x.Id==value);

    return array;
  }
}
