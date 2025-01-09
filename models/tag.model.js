import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({

  tagName: { 
    type: String, 
    required: true, 
    unique: true 
  },

  createdAt: { 
    type: Date, 
    default: 
    Date.now 
  },

  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
  
});

const TagModel = mongoose.model("Tag", tagSchema);
export default TagModel;
