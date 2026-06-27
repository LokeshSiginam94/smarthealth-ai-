const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Phani',
    },
    age: {
      type: String,
      default: '19',
    },
    height: {
      type: String,
      default: '',
    },
    weight: {
      type: String,
      default: '',
    },
    goal: {
      type: String,
      default: 'Improve daily wellness',
    },
    waterTarget: {
      type: String,
      default: '8',
    },
    sleepTarget: {
      type: String,
      default: '7.5',
    },
    activityLevel: {
      type: String,
      default: 'Moderate',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Profile', profileSchema)