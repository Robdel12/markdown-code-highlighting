import Ember from 'ember';

export function formatMarkdown(value, options) {
  if(!value || !options){ return; }

  marked.setOptions({
    highlight: function(code) {
      debugger;
      return hljs.highlightAuto(code).value;
    }
  });

  return new Handlebars.SafeString(window.marked(value));
}

export default Ember.Handlebars.makeBoundHelper(formatMarkdown);
