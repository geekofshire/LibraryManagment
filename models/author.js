const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const { DateTime } = require("luxon");

const AuthorSchema=new Schema({
    first_name: {type: String, required:true,maxLength:100},
    family_name:  { type: String, required: true, maxLength: 100 },
    date_of_birth: Date,
    date_of_death: Date,
});

AuthorSchema.virtual("name").get(function () {
    return this.family_name + ", " + this.first_name;
  });

AuthorSchema.virtual("url").get(function(){
    return `/catalog/author/${this._id}`;
})

AuthorSchema.virtual("get_birth_Date").get(function(){
    if(this.date_of_birth) return DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
    else return "";
});

AuthorSchema.virtual("get_death_Date").get(function(){
    if(this.date_of_death) return DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
    else if(this.date_of_birth) return "Till Now";
    else return "";
});

module.exports=mongoose.model("Author",AuthorSchema);