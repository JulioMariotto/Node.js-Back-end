const sellerSchema = require("../schemas/sellerSchema");

function validatorRequest(req, res, next) {

    if(req.route.path === "/authentication" || req.route.path === "/newSeller")
        if(!req.body.email || !req.body.password)
            return res.status(422).json({ error: "Campos obrigatórios não preenchidos."});
    if(req.route.path === "/searchSellerByName" || req.route.path === "/newSeller")
        if(!req.body.name)
            return res.status(422).json({ error: "Campo nome é obrigatório"});
    if(req.route.path === "/updateSeller")
        if(!req.body.id || req.body.name || req.body.email)
            return res.status(422).json({ error: "Campos obrigatórios não preenchidos"})
    
    const { error } = sellerSchema.validate(req.body);
    if(error)
        return res.status(422).json({ error: error.details });
    next();
}

module.exports = validatorRequest;