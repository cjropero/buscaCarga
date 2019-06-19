const Users = require('./auth.controller');

module.exports = (router)=> {
  router.post('/register', Users.createUser);
  router.get('./login', Users.loginUser);
}