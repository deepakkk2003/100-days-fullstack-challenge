function validateAge(age) {
  return age >= 18;
}

function validateUser(user) {
  if (!user.name || !user.age || !user.email) {
    return {
      valid: false,
      message: "name, age, and email are required"
    };
  }

  return { valid: true };
}

module.exports = {
  validateAge,
  validateUser
};
