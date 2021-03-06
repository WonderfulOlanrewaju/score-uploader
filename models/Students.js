import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentObj = new Schema({
    author: ObjectId,
    name: {type: String, min:3, required: [true, "Name is missing for one or more students"]} ,
    age: { 
            type: Number, 
            min: 10, 
            required: [true, "Age is missing for one or more students"]
        },
    maths:  {type:Number},
    english:  {type:Number},
    date: {type:Date, default:Date.now}
});

const Student =  mongoose.model("Student", studentObj);

export default Student;