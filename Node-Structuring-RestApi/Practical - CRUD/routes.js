const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, 'users.json');

// Initialize users array
let users = [];

// Read existing users or create default
if (fs.existsSync(usersFilePath)) {
    users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
} else {
    users = [{ id: 1, name: "Pratham Sachdev" }];
    saveUsersToFile();
}

// Helper function to save users
function saveUsersToFile() {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

router.get("/", (req, res) => {
    res.send("<h3>Hello World !</h3>");
});

router.get("/users", (req, res) => res.json(users));

router.post("/users", (req, res) => {
    const user = { id: users.length + 1, name: req.body.name };
    users.push(user);
    saveUsersToFile();
    res.status(201).json(user);
});

router.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");

    user.name = req.body.name;
    saveUsersToFile();
    res.json(user);
});

router.delete("/users/:id", (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send("User not found");

    const deletedUser = users.splice(userIndex, 1);
    saveUsersToFile();
    res.json(deletedUser[0]);
});

module.exports = router;