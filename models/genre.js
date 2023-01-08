const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const GenreInstance=new Schema({
    name:{type: String,maxLength:100,minLength:3},
})

GenreInstance.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`;
})

module.exports=mongoose.model("Genre",GenreInstance);