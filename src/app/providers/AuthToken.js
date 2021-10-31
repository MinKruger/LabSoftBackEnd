const { encode, verify } = require("../../shared/utils/JWT");

class AuthToken {
  static generate(data) {
    return encode(data, { expiresIn: "2h" });
  }

  static authenticate(token) {
    return verify(token);
  }
}

exports.AuthToken = AuthToken;
