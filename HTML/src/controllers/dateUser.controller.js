const userdateCtrl = {};

// Models
const Userdate = require("../models/crearUsuario");

userdateCtrl.renderUserForm = (req, res) => {
    res.render("dateuser/new-user");
  };


  userdateCtrl.createNewUser = async (req, res) => {
    const { usuario, carrera, cursandoActualemnte, preparandoFinales, serTutor, MateriaAplicadas} = req.body;
    const errors = [];
    if (!usuario) {
      errors.push({ text: "Por favor ingrese un usuario" });
    }
    if (!carrera) {
      errors.push({ text: "Por favor ingrese una carrera" });
    }
    if (!cursandoActualemnte) {
        errors.push({ text: "Por favor ingrese una materia" });
      }
    if (!preparandoFinales) {
        errors.push({ text: "Por favor ingrese un final" });
      }
    if (!serTutor) {
        errors.push({ text: "Por favor ingrese una opcion" });
      }
    if (!MateriaAplicadas) {
        errors.push({ text: "Por favor ingrese una materia" });
      }
    if (errors.length > 0) {
      res.render("dateuser/new-user", {
        errors,
        usuario,
        carrera,
        cursandoActualemnte,
        preparandoFinales,
        serTutor,
        MateriaAplicadas,
      });
    } else {
      const newUser = new User({ usuario, carrera,cursandoActualemnte, preparandoFinales, serTutor, MateriaAplicadas});
      newUser.user = req.user.id;
      await newUser.save();
      req.flash("success_msg", "User Added Successfully");
      res.redirect("/dateuser");
    }
  };
  
  userdateCtrl.renderUser = async (req, res) => {
    const users = await Userdate.find({ user: req.user.id })
      .sort({ date: "desc" })
      .lean();
    res.render("dateuser/all-user", { users });
  };
  
  userdateCtrl.renderEditForm = async (req, res) => {
    const users = await Userdate.findById(req.params.id).lean();
    if (users.usuario != req.user.id) {
      req.flash("error_msg", "Not Authorized");
      return res.redirect("/dateuser");
    }
    res.render("dateuser/edit-user", { users });
  };
  
  userdateCtrl.updateUser = async (req, res) => {
    const { usuario, carrera,cursandoActualemnte, preparandoFinales, serTutor, MateriaAplicadas } = req.body;
    await Userdate.findByIdAndUpdate(req.params.id, { usuario, carrera,cursandoActualemnte, preparandoFinales, serTutor, MateriaAplicadas });
    req.flash("success_msg", "User Updated Successfully");
    res.redirect("/dateuser");
  };
  
  userdateCtrl.deleteUser = async (req, res) => {
    await Userdate.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Deleted Successfully");
    res.redirect("/dateuser");
  };
  
  module.exports = userdateCtrl;