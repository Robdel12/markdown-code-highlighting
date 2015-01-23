/* global module */

module.exports = {

  included: function(app) {
    this._super.included(app);
    //figure this out
    app.import("bower_components/highlightjs/highlight.pack.js");
    app.import("bower_components/marked/lib/marked.js");
  },

  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('marked').then(function(){
      return self.addBowerPackageToProject('highlightjs');
    });
  }
};
