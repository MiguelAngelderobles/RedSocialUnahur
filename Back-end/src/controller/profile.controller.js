const Profile = require('../../models/profile');
const controllerProfile = {}

controllerProfile.getAll = async (req, res, next) => {
  const perfiles = await Profile.find()
  .then(perfiles =>{
    res.send(perfiles)})
  .catch(err=>{console.log(err)});
};

controllerProfile.getById = async (req, res, next) => {
  const perfiles = await Profile.findById(req.params.id).populate('user')
  .then(perfiles =>{
    res.send(perfiles)})
  .catch(err=>{console.log(err)});
};

controllerProfile.post = async (req, res, next) => {
  const perfiles = new Profile(req.body)
  await perfiles.save()
  .then(perfiles =>{
    console.log(perfiles)
    res.send(perfiles)})
  .catch(err=>{console.log(err)});
};

controllerProfile.put = async (req, res, next) => {
  const { id } = req.params;
  await Profile.update({_id: id}, req.body);
};

controllerProfile.delete = async (req, res, next) => {
  let { id } = req.params;
  await Profile.deleteOne({_id: id});
}; 

module.exports = controllerProfile;


/* controllerProfile.get = async (req, res, next) => {
  let { id } = req.params;
  const perfiles = await Profile.findById(id).populate('user');
  perfiles.status = !perfiles.status;
  await perfiles.save();
  res.send(perfiles)
  .then(perfiles =>{
    res.send(perfiles)})
  .catch(err=>{console.log(err)})
};
 */
