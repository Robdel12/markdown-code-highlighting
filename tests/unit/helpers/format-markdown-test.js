import { formatMarkdown } from 'markdown-code-highlighting/helpers/format-markdown';

import { module, test } from 'qunit';

module('FormatMarkdownHelper');

// Replace this with your real tests.
test('it should format markdown to HTML', function(assert) {
  var result = formatMarkdown("# heading");

  assert.ok(result);
  assert.equal(result.string.trim(), '<h1 id="heading">heading</h1>');
});

test('it should format markdown code to HTML and highlight it', function(assert) {
  var result = formatMarkdown("```javascript \n var that = this;```");

  assert.ok(result);
  assert.equal(result.string.trim(), '<pre><code class="lang-javascript"> <span class="hljs-keyword">var</span> <span class="hljs-literal">that</span> = <span class="hljs-keyword">this</span>;\n</code></pre>');
});
