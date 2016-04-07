export let TestPagination = class TestPagination {
  changeConfig() {
    this.config.total = Math.floor(Math.random() * (100 - 50)) + 50;
  }
  constructor() {
    this.config = { total: 100, current: 5, size: 10 };

    this.current = 1;
    this.total = 1234;
    this.itemperpage = 15;
  }

};