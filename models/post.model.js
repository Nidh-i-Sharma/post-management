import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },

  descrption: { 
    type: String, 
    required: true 
  },

  image: { 
    type: String, 
    required: true 
  },

  tags: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Tag" 
  }],

  createdAt: { 
    type: Date, 
    default: Date.now 
  },

  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
  
});

const PostModel = mongoose.model("Post", postSchema);
export default PostModel