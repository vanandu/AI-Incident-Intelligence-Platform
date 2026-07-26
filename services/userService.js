// User Service

const users = [];

function createUser(user) {
  user.createdAt = new Date();
  users.push(user);
  return user;
}

function getUserByEmail(email) {
  return users.find(user => user.email === email);
}

module.exports = {
  createUser,
  getUserByEmail,
};