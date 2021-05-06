const database = require('../database_orm/config/database');

exports.getUsers = function () {
    return database.execute('SELECT * FROM cassandra.users');
}

exports.getUser = function (userID) {
    return database.execute('SELECT * FROM cassandra.users where id = ?', [userID]);
}

exports.deleteUser = function (userID) {
    return database.execute('DELETE FROM cassandra.users WHERE id = ?', [userID]);
}

exports.saveUser = function (user) {
    return database.execute('INSERT INTO cassandra.users (id, nome, email) VALUES (uuid(), ?, ?)', 
    [user.nome, user.email]);
}
