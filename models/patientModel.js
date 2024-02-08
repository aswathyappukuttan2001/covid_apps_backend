const mongoose=require("mongoose")

const patientschema=new mongoose.Schema(
    {
   Name: String,
    Phoneno: String,
    Address: String,
    symptoms: String,
    status:String
    
    }
)
module.exports=mongoose.model("patient",patientschema)