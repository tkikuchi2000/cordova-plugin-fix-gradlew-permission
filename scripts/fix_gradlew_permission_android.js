var fs = require('fs');

function isExistFile(file) {
  try {
    fs.statSync(file);
    return true;
  } catch(err) {
    if (err.code === 'ENOENT') return false;
  }
}

module.exports = function(context) {
  var path = context.requireCordovaModule('path');
  var gradlew = path.join(context.opts.projectRoot, 'platforms/android/gradlew');
  var deferred = context.requireCordovaModule('q').defer();

  // change permission
  if (isExistFile(gradlew)) {
    fs.chmodSync(gradlew, '755')
    deferred.resolve();
  }

  return deferred.promise;
};
