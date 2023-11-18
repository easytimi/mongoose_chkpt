import mongoose from 'mongoose'
const {Schema,model}=mongoose;
const personSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    favoriteFoods: [String]
});
const person = model("Person",personSchema);
export default person;
