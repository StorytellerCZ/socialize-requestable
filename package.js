Package.describe({
  name: 'socialize:requestable',
  version: '1.0.0',
  summary: 'Create models that are requestable',
  git: 'https://github.com/copleykj/socialize-requestable.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use('ecmascript');
  api.mainModule('server/server.js', 'server');
  api.mainModule('common/common.js');
});
