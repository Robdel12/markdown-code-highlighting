import Ember from 'ember';
import layout from '../templates/components/code-highlight';

export default Ember.Component.extend({
  layout: layout,
  formattedCode: null,

  didInsertElement() {
    this._super.apply(this, arguments);

    let content = this.$('.code-block').text().trim();

    marked.setOptions({
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });

    this.set('fortmattedCode', window.marked(content).replace( /lang-(\w+)/g, "lang-$1 hljs $1"));
  }
});
