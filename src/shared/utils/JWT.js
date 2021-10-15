const {sign, verify:verifyJWT} = require('jsonwebtoken')
const dotenv = require("dotenv");

dotenv.config({
    path: {
      production: ".env.production",
      staging: ".env.staging",
      development: ".env.development",
    }[process.env.NODE_ENV || "development"],
  });

function encode(data,options){
    return sign(data,process.env.JWT_SECRET_KEY, options)
}

function verify(token){
    return verifyJWT(token,process.env.JWT_SECRET_KEY,(err,data) => {
        if(err) throw new Error(err.message)

        return data
    })
}

module.exports = {
    encode,
    verify
}