const Character = require("./../models/character.model");

const getAllCharacters = async (req, res) => {
  console.log(req.query.limit)
  await Character
    .find({}, (err, characters) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Something went wrong.",
        });
      }
      res.set("Cache-Control", "public, max-age=315576");
      return res.json(Character.structure(characters));
    })
    .limit((req.query.limit)? parseInt(req.query.limit): 0);
};

const getSingleCharacter = async (req, res) => {
  const id = req.params.id;
  await Character.findOne({ id: id }, (err, character) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong.",
      });
    }
    res.set("Cache-Control", "public, max-age=315576");
    return res.json(Character.structure(character));
  });
};

module.exports = { getAllCharacters, getSingleCharacter };
