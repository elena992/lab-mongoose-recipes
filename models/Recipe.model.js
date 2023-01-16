const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredientes: {
    type: [String],
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
