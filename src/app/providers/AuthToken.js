const { encode, verify } = require("../../shared/utils/JWT")

class AuthToken {
    static generate(data) {
        return encode(data, { expiresIn: '2h' }) 
    }    
}

exports.AuthToken = AuthToken