const Group = require('../../models/group');
const controllerGroup = {}

controllerGroup.post = async (req, res, next) => {
    const grupos = new Group(req.body);
    await grupos.save();
    res.status(200).send({menssage: "Se ha creado correctamente el grupo"})
    res.send(grupos)
  };
  
controllerGroup.getAll = async (req, res, next) => {
    const grupo = await Group.find();
    res.status(200).send(grupo)    
  };
  
controllerGroup.delete = async (req, res, next) => {
    let { id } = req.params;
    await Group.deleteOne({_id: id});
    res.status(200).send({menssage: "Se ha eliminado correctamente el grupo"})
  };// falla pero borra 
  
controllerGroup.put = async (req, res, next) => {
    const { id } = req.params;
    await Group.update({_id: id}, req.body);
    res.status(200).send({menssage: "Se ha upgradeado correctamente el grupo"})
    res.json(Grupo)
  };  
  
controllerGroup.getById = async (req, res, next) => {
    const id = req.params.id
    const grupo = await group.findById(id);
    res.status(200)
    res.json(grupo)
  };  

module.exports = controllerGroup;
