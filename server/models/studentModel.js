import mongoose from 'mongoose';

const studentModel = new mongoose.Schema({
    name: {type: String, required: true}, 
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true},
    // section: {type: String, required: true},
    // batchStartYear: {type: String, required: true},
    // batchEndYear: {type: String, required: true},
    // course: {type: String, required: true},
    // contact: {type: String, required: true},
    // whatsapp: {type: String, required: true},
    // role: {type: String, default: "Student"},
    // batch_start_year: {type: String, required: true},
    // batch_start_year: {type: String, required: true},
    // batch_start_year: {type: String, required: true},    
    quote: String  //further thing
})

const dbModel = mongoose.model('studentData', studentModel)
export default dbModel;




