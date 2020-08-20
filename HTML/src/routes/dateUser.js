const express = require("express");
const router = express.Router();


router.get('/dateUser/new-user', (req,res) =>{
  res.render('dateUser/new-user');
});

router.post('/dateUser/new-note')

router.get('/dateUser', (req,res) => {
  res.send('Usuarios from database')
});

module.exports = router;
/*
// Controller
const {
    renderUserForm,
    createNewUser,
    renderUser,
    renderEditForm,
    updateUser,
    deleteUser
  } = require("../controllers/dateUser.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

  // New User
router.get("/dateuser/add", isAuthenticated, renderUserForm);

router.post("/dateuser/new-user", isAuthenticated, createNewUser);

// Get All User
router.get("/dateuser", isAuthenticated, renderUser);

// Edit User
router.get("/dateuser/edit/:id", isAuthenticated, renderEditForm);

router.put("/dateuser/edit-user/:id", isAuthenticated, updateUser);

// Delete User
router.delete("/dateuser/delete/:id", isAuthenticated, deleteUser);
*/

