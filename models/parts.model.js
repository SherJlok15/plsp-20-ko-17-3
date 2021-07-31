const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partsSchema = new Schema({
  partNumber: { type: String , required: true},
  partName: { type: String , required: true},
  lessons: { type: Array, required: true }
},{
  timestamps: true,
});

const Parts = mongoose.model('Parts', partsSchema);

module.exports = Parts;
