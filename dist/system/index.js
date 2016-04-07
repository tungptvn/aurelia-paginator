'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      function configure(aurelia) {
        aurelia.globalResources('./pagination/pagination-element');
      }

      _export('configure', configure);
    }
  };
});