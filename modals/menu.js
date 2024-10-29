import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  _id: String,
  name: String,
  recipe: String,
  category: String,
  image: String,
  price: Number,
});

const Menu = model("Menu", productSchema);

export default Menu;
