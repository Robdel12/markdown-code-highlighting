/* jshint node: true */
'use strict';

module.exports = {
  name: 'markdown-code-highlighting',
  included: function(app) {
    this._super.included(app);

    app.import("bower_components/highlightjs/highlight.pack.js");
    app.import("bower_components/marked/lib/marked.js");
  }
};
