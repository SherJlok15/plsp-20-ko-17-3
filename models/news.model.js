const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  news: { type: Object , required: true}
},{
  timestamps: true,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
