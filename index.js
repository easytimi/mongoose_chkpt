import mongoose from "mongoose";
import dotenv from"dotenv";
import person from"./Model/person.js";
dotenv.config();
mongoose.connect(process.env.MONGODB_URI);
//create and save a record of a model
const firstPerson = new person({
    name:"Jane Fonda",
    age:84,
    favoriteFoods:["vodka","air"]
});
await firstPerson.save();
console.log(firstPerson);
const arrayOfPersons = [{
name:"Frankie",
age:74,
favoriteFoods:["Del Taco"]
},{
name:"Sol",
age:76,
favoriteFoods:["roast chicken"]
},{
name:"Robert",
age:78,
favoriteFoods:["wine"]
},
{
name:"mary",
age: 32,
favoriteFoods:["burrito","fried rice"]
}];
const manypersons = await human.create(arrayOfPersons);
console.log(manypersons);
const searchPersons = await person.find({});
//console.log(searchPersons);
 const searchByName = await person.find({name:"Frankie"});
//search by id
const searchById = await person.findById('655713ae52f5e468ace92887').exec();
console.log(searchById);

//performing classic update
const editSave = await person.findById('655703b608950bae98bb302b').exec()
editSave.favoriteFoods.push('hamburger');
editSave.save();
console.log(editSave);
//perform new update on document using model.findone and update
const FindandUpdate = await person.findOneAndUpdate({name:"Robert"},{$set:{age:20},options})
console.log(FindandUpdate);
//delete one document using model.findById and Remove
const findAndRemove = await person.findByIdAndRemove('65571c27f8c3abb261c831d2').exec();
console.log(findAndRemove);
//Delete many documents using model.remove
const removeManyPeople = (done) => {
const nameToRemove = "Mary";

person.remove({name: nameToRemove}, (err, response) => {
if(err) return console.log(err);
done(null, response);
});
};
//chain search query helpers to narrow search results
const queryChain = (done) => {
var foodToSearch = "burrito";

person
.find({favoriteFoods: foodToSearch})
.sort({ name: 1 })
.limit(2)
.select({ age: 0 })
.exec((err, people) => {
if (err) return console.log(err);
done(null, people);
});
};


