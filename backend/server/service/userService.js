const userData = require('../data/userData');

exports.getUsers = function () {
    return userData.getUsers();
}

exports.getUser = function (userID) {
    return userData.getUser(userID);
}

exports.deleteUser = function (userID) {
    return userData.deleteUser(userID);
}

exports.saveUser = function (user) {
    return userData.saveUser(user);
}