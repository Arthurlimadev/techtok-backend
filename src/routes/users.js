const router = require("express").Router();

let users = [];

router.get("/users", (req, res) => {
  res.json(users);
});

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    res.status(404).json({ error: "Usuário não encontrado." });
  } else {
    res.json(user);
  }
});

router.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  const index = users.findIndex((user) => user.id === userId);

  if (index === -1) {
    res.status(404).json({ error: "Usuário não encontrado." });
  } else {
    users[index] = { ...users[index], ...updatedUser };
    res.json(users[index]);
  }
});

router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex((user) => user.id === userId);

  if (index === -1) {
    res.status(404).json({ error: "Usuário não encontrado." });
  } else {
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
  }
});

module.exports = router;
