const joi = require("joi");

const sellerSchema = joi.object().keys({
    id: joi.number().integer(),
    name: joi.string(),
    email: joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "br"]},
    }),
    password: joi.string().min(8).pattern(/([a-z]+[@!#$%^&*()/\\]*[\d]|[\d]+[@!#$%^&*()/\\]+[a-z])/i),
});

module.exports = sellerSchema;