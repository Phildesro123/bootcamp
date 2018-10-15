"use strict";

// Project model
var mongoose = require('mongoose');

var Project = mongoose.model('Project', {
  title: {
    type: String,
    required: true
  },
  goal:{
    type:Number,
    required:true
  },
  start:{
    type:Date,
    required:true
  },
  description:{
    type:String,
    required:false
  },
  end:{
    type:Date,
    required:true
  }
});

module.exports = {
  Project: Project
}
