Package.describe({
  name: "cherbst:reactive-publish",
  summary: "Enable server-side reactivity for Meteor.publish",
  version: "0.1.8",
  git: "https://github.com/cherbst/meteor-reactive-publish.git"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use([
    'coffeescript',
    'tracker',
    'underscore',
    'peerlibrary:server-autorun@0.2.2',
    'accounts-base'
  ], 'server');

  api.add_files('lib/reactive-publish.coffee', 'server');
});
