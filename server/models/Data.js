const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Schema = new Schema({
    name: String,
    updatedAt: String,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const schema = mongoose.model("schema", Schema)

module.exports = schema