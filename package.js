Package.describe({
  name: 'allerion:kl-dialog',
  version: '0.0.2',
  summary: 'Meteor modal dialog package. Under development, not suitable for production.',
  git: 'https://github.com/KaitaniLabs/kl-dialog.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use(['templating@1.3.2', 'underscore', 'ecmascript'], 'client');
  api.mainModule('kl-dialog.js');

  api.addFiles([
    'client/templates.html',
    'client/mechanics.js',
    'client/style.css',
    'kl-dialog.js',
  ], 'client');

  api.export('Dialog','client');
});

Package.onTest(function(api) {
  api.use(['templating@1.3.2', 'underscore', 'ecmascript']);
  api.use('tinytest');
  api.use('allerion:kl-dialog');
  api.mainModule('kl-dialog-tests.js');
});
