function validateEmail(email) {
    // Create a regular expression to match the email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // Return whether the email matches the regular expression
    return emailRegex.test(email);
  }
module.exports = validateEmail;
