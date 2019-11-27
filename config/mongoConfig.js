export default {
    protocol: 'mongodb',
    hostname: process.env.MONGO_DB_HOSTNAME || 'localhost',
    port: process.env.MONGO_DB_PORT || '27017',
    database: process.env.MONGO_DB_DATABASE || 'testdb',
    user: process.env.MONGO_DB_USER || 'test',
    password: process.env.MONGO_DB_PASSWORD || '123456',
    authSource: process.env.MONGO_AUTH_SOURCE || 'admin',

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 1000,

    uri: function () {
        return this.protocol + '://' + this.hostname + ':' + this.port + '/' + this.database;
    },
    auth: function() {
        return {
            user: this.user,
            password: this.password,
            authSource: this.authSource
        }
    },
    options: function() {
        return {
            useNewUrlParser: this.useNewUrlParser,
            useCreateIndex: this.useCreateIndex,
            useFindAndModify: this.useFindAndModify,
            auth: this.auth(),
            reconnectTries: this.reconnectTries,
            reconnectInterval: this.reconnectInterval
        }
    }
}