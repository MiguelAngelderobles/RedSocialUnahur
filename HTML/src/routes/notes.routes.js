
/*const crearUsuario = require("../models/crearUsuario");*/


/*
router.get('/dateUser/new-user', (req,res) =>{
  res.render('dateUser/new-user');
});

router.post('/dateUser/new-user', (req,res) => {
  const {usuario,carrera} = req.body;
  const errors = [];
  if(!usuario){
    errors.push({text:'Por favor ingrese un usuario'});
  }
  if(!carrera){
    errors.push({text: 'Ingrese una carrera'});
  }
  if(errors.length>0){
    res.render('dateUser/new-user',{
      errors,
      usuario,
      carrera
    });
  }
  else{
    const newUser= new crearUsuario({usuario,carrera});
    console.log(newUser);
    res.send('ok')
  }
});


router.get('/dateUser', (req,res) => {
  res.send('Usuarios from database')
});

module.exports = router;
*/
const express = require("express");
const router = express.Router();

// Controller
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require("../controllers/notes.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Note
router.get("/notes/add", isAuthenticated, renderNoteForm);

router.post("/notes/new-note", isAuthenticated, createNewNote);

// Get All Notes
router.get("/notes", isAuthenticated, renderNotes);

// Edit Notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;