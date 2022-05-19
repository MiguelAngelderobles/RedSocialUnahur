const user = require('../models/user');

const controllerUser = {}

controllerUser.post = async (req, res) => {
    const ususario = new user();
    ususario.email = req.body.email
    ususario.password = ususario.encryptPassword(req.body.password);
    ususario.save();
    res.json(ususario);
}

controllerUser.validPassword = async(req, res) => {
    const email = req.body.email
    const password = req.body.password
    const ususario = await user.findOne({'email': email});
    
    if (ususario.comparePassword(password)) {
        res.json(ususario);
    }else{
        res.json(null);
    }
}

controllerUser.getUser = async (req, res) => {
    const id = req.params.id
    const user = await user.findById(id);
    res.json(user);
}

controllerUser.getByEmail = async (req, res) =>{
    const email = req.params.email
    const user = await user.findOne({'email': email})
    res.json(user)
}

controllerUser.exito = async (req, res) => {
    res.json('exito');
}

controllerUser.fallo = async (req, res) => {
    res.json('fallo');
}

module.exports = controllerUser;