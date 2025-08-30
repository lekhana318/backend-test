const mongoose=require('mongoose');
async function connection(){
    await mongoose.connect("mongodb+srv://lekhanabilebal123:Lekhana%402006@cluster0.uq609he.mongodb.net/dummy")
}
//step 3 create a schema
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minilength:3
    },
    email:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minilength:6
    },
    createdAt:{
        type:Date,
        Date:Date.now()
    }
})
let usermodel=mongoose.model('users',userschema);
const taskschema=new mongoose.Schema({

        title:{
            type:String,
            required:true,
            maxlength:100 
            },
        description:{ 
        type:String,
        maxlength:500 
          },
        status:{
            type:String,
            enum:['pending','in-progress','completed'], 
            default:'pending'
        },
        priority:{
        type:String,
        enum:['low','medium','high'],
         default:'medium'
        },
        userId:{ 
        type:'ObjectId',
        ref:'User',
        required:true
       },
        createdAt:{ 
        type:Date,
        default:Date.now 
       },
        updatedAt:{
             type:Date, 
             default:Date.now 
            }    
})
let taskmodel=mongoose.model('task',taskschema);
console.log("db connected success")
