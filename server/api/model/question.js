const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let questionShema = new Schema({
    id: Number,
    question: String,
    answer: Number
});

module.exports = mongoose.model("Question", questionShema);
