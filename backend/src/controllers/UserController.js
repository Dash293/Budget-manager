const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = {
        name,
        email,
        password: hashedPassword,
      };

      const [result] = await models.user.insert(user);
      res.status(201).send({ ...user, id: result.insertId });
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred during user registration.");
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const [[user]] = await models.user.selectByEmail(email);

      if (!user) {
        return res.status(400);
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400);
      }

      let token;

      try {
        token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h", // Expires in 1 hour
        });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal server error" });
      }

      res.cookie("token", token, {
        secure: true,
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60 * 1000), // Expires in 1 hour
      });

      return res.status(200).send({ message: "Logged in successfully", token });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal server error" });
    }
  };
}

module.exports = UserController;
