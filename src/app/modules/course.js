const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)


const Course = new Schema({
  _id: { type: Number },
  name: { type: String },
  description: { type: String },
  video: { type: String },
  image: { type: String },
  slug: { type: String, slug: 'name', unique: true },
},
  {
    _id: false,
    timestamps: true
  });

Course.query.sortable = function (req, res) {
  if (req.query.hasOwnProperty('_sort')) {
    const isValidtype = ['asc', 'desc'].includes(req.query.type)
    return this.sort({
      [req.query.column]: isValidtype ? req.query.type : "desc",
    })
  }
  return this
}



mongoose.plugin(slug)
Course.plugin(AutoIncrement)
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'

})

module.exports = mongoose.model('Course', Course);