// Trigger test - auth update
function validateToken(token) {
    return token && token.length > 10;
}

module.exports.validateToken = validateToken;