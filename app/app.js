import Resolver from 'resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});

// fix ember data inspector
// DS.DebugAdapter.reopen({
//   getModelTypes: function() {
//     var self = this;
//     return Ember.keys(requirejs._eak_seen).filter(function(key) {
//       return !!key.match(/^appkit\/models\//) && self.detect(require(key).default);
//     }).map(function(key){
//       var type = require(key).default, typeKey = key.match(/^appkit\/models\/(.*)/)[1];
//       type.toString = function() { return typeKey; };
//       return type;
//     });
//   }
// });

export default App;
