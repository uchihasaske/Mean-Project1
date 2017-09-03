const crypto = require('crypto');


crypto.randomBytes(256).toString('hex');

module.export = {
    uri: 'mongod://localhost:27017/' + this.db,
    secret: 'crypto',
    db: 'mean-angular-2'
    
}