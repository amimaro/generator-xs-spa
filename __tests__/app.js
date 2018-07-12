'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-xs-spa:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: 'name', description: 'description' });
  });

  it('creates files', () => {
    assert.file(['main.js', 'config.json', 'index.html', 'pages/home.html']);
  });
  it('check props', () => {
    assert.fileContent('index.html', /<title>name<\/title>/);
    assert.fileContent('index.html', /<meta name="description" content="description">/);
  });
});
