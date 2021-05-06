const express = require('express');
const router = express();
const userService = require('../service/userService');

router.get('/users', async function(req, res) {
    const users = await userService.getUsers();
    res.json(users.rows);
    // console.log(users);
});

router.get('/user/:id', async function(req, res) {
    const user = await userService.getUser(req.params.id);
    res.json(user.rows);
});

router.delete('/user/:id', async function(req, res) {
    await userService.getUser(req.params.id);
    res.json({message: 'registro excluído com sucesso'});
});

router.put('/user', function(req, res) {
    const user = req.body;
    const newUser = userService.saveUser(user);
    res.json(newUser.rows);
});

module.exports = router;