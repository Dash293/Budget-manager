const models = require("../models");

class ActivityController {
  static browse = (req, res) => {
    const { userId } = req;
    models.activity
      .findAll(userId)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    const { userId } = req;
    models.activity
      .find(req.params.id, userId)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    const { userId } = req;
    const { id } = req.params;

    models.activity
      .delete(id, userId)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ActivityController;
