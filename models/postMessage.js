import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creator: String,
  title: String,
  message: String,
  selectedFile: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
