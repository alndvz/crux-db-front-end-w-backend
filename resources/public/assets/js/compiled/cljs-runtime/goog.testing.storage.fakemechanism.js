goog.provide("goog.testing.storage.FakeMechanism");
goog.setTestOnly("goog.testing.storage.FakeMechanism");
goog.require("goog.storage.mechanism.IterableMechanism");
goog.require("goog.structs.Map");
goog.testing.storage.FakeMechanism = function() {
  this.storage_ = new goog.structs.Map;
};
goog.inherits(goog.testing.storage.FakeMechanism, goog.storage.mechanism.IterableMechanism);
goog.testing.storage.FakeMechanism.prototype.set = function(key, value) {
  this.storage_.set(key, value);
};
goog.testing.storage.FakeMechanism.prototype.get = function(key) {
  return this.storage_.get(key, null);
};
goog.testing.storage.FakeMechanism.prototype.remove = function(key) {
  this.storage_.remove(key);
};
goog.testing.storage.FakeMechanism.prototype.__iterator__ = function(opt_keys) {
  return this.storage_.__iterator__(opt_keys);
};

//# sourceMappingURL=goog.testing.storage.fakemechanism.js.map
