const { model,Schema  } = require("mongoose");

const bookSchema = new Schema({
    "title": { type: String, required: true},
    "isbn": { type: String, required: true},
    "pageCount": { type: Number, required: true},
    "publishedDate": { type: Date, required: true},
    "thumbnailUrl": { type: String, required: true},
    "shortDescription": { type: String, required: true},
    "longDescription": { type: String, required: true},
    "status": { type: String, required: true},
    "authors": [{ type: String, required: true}],
    "categories": [{ type: String, required: true}],
})


module.exports = model("books", bookSchema);