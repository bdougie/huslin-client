/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
      'ember-cli-bootstrap-sass': {
        'importBootstrapTheme': true
      }
    });

    return app.toTree();
};
