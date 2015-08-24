var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
      'ember-bootstrap': {
        'importBootstrapTheme': true
      }
    });

    return app.toTree();
};
