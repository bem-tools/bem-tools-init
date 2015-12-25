var init = require('./');

module.exports = function() {
    this
        .title('Init').helpful()
        .arg()
            .name('root').title('Root')
            .end()
        .act(function(opts, args) {
            // TODO: handle errors
            init(args.root);
        })
        .end();
};
