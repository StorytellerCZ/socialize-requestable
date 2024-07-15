/* global Package */
Package.describe({
  name: 'socialize:requestable',
  version: '2.0.0',
  summary: 'Create models that are requestable',
  git: 'https://github.com/copleykj/socialize-requestable.git'
})

Package.onUse(function _(api) {
  api.versionsFrom(['1.10.2', '2.3', '3.0'])

  api.use(['socialize:linkable-model@2.0.0', 'aldeed:simple-schema@1.13.1 || 2.0.0'])

  api.mainModule('common/common.js')
})
