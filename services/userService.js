const users = new Map();

function createUser(user) {
    users.set(user.email, user);
}

function getUser(email) {
    return users.get(email);
}