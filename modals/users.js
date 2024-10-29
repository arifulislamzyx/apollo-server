import mongoose from "mongoose";

var Schema = mongoose.Schema;

var product = new Schema({
  _id: String,
  firstName: String,
  lastName: String,
  age: String,
});

var Menu = mongoose.model("Menu", product);

export default Menu;
