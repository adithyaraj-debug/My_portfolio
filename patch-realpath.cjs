const fs = require('node:fs');

if (fs.realpathSync && typeof fs.realpathSync.native === 'function') {
  const origNativeSync = fs.realpathSync.native;
  fs.realpathSync.native = function (...args) {
    try {
      return origNativeSync.apply(this, args);
    } catch {
      return fs.realpathSync.apply(this, args);
    }
  };
}

if (fs.realpath && typeof fs.realpath.native === 'function') {
  const origNativeAsync = fs.realpath.native;
  fs.realpath.native = function (...args) {
    const cb = typeof args[args.length - 1] === 'function' ? args.pop() : null;
    if (!cb) {
      return fs.realpath(...args);
    }
    origNativeAsync(...args, (err, res) => {
      if (err) {
        fs.realpath(...args, cb);
      } else {
        cb(null, res);
      }
    });
  };
}

