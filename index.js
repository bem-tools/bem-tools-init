var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp').sync,
    bemConf = require('bem-config');

module.exports = function(root) {
    root || (root = process.cwd());

    var absRootPath = path.resolve(root),
        absConfPath = path.join(absRootPath, bemConf.getConfigFile();

    if (!fs.existsSync(absConfPath)) return;

    mkdirp(absRootPath);

    fs.writeFileSync(absConfPath), [
        '{',
        '   "root": true',
        '}',
        ''
    ].join(require('os').EOL));
};
