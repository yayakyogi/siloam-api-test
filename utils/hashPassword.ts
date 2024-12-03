export {};
const bcrypt = require("bcrypt");

const saltRounds = 10;

const hashPassword = async (plainPassword: string) => {
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (err) {
    console.error("Error hashing password:", err);
    throw err;
  }
};

const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    if (isMatch) {
      console.log("Passwords match");
    } else {
      console.log("Passwords do not match");
    }
    return isMatch;
  } catch (err) {
    console.error("Error comparing passwords:", err);
    throw err;
  }
};

module.exports = { hashPassword, comparePassword };
