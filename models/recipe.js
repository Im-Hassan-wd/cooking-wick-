const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  ingrident: {
    type: String,
    required: true
  },
  cookingTime: {
    type: String,
    required: true
  }
}, { timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;