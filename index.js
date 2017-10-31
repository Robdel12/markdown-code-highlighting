/* eslint-env node */
'use strict';

module.exports = {
  name: 'markdown-code-highlighting',
  included: function(app) {
    this._super.included(app);

    app.import("node_modules/highlightjs/highlight.pack.js");
    app.import("node_modules/marked/lib/marked.js");
  }
};
