/* global module */

module.exports = {

  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('marked').then(function(){
      return self.addBowerPackageToProject('highlightjs');
    });
  }
};
