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
