# Markdown-code-highlighting [![Build Status](https://travis-ci.org/Robdel12/markdown-code-highlighting.svg?branch=master)](https://travis-ci.org/Robdel12/markdown-code-highlighting)

# Usage

- Install the plugin: `npm install markdown-code-highlighting --save-dev`
- Run the generator: `ember g markdown-code-highlighting`
- In your Brocfile you'll need to import the CSS styling you want for the highlighter. You can see the [full list here](https://highlightjs.org/static/demo/). When you pick one you'll (like github.css) you'll import it by doing: `app.import("bower_components/highlightjs/styles/github.css");`
- Now format some markdown! Call the helper on anything that has markdown by doing: `{{format-markdown body}}`. `body` is what you're passing in.


# Contributing

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
