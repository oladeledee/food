const mongoose=require('mongoose');
const express=require('express');
const Joi=require('joi');

mongoose.connect("mongodb://localhost:27017/comment")
.then(() => console.log('Connected to contact info...'))
  .catch(err => console.error('Could not connect to MongoDB...'));





  const messageSchema=new mongoose.Schema({
    name:String,
    email:{
      type:String,
      minlength:5,
      required:true,
      maxlength:255
    },
  
     message:{type:String}
      
        
  });
  
  const Message= mongoose.model('message',messageSchema);
  
  function validatemessage(message) {
      const schema = {
          name:Joi.string().min(4).max(50).required(),
        email: Joi.string().min(5).max(225).required().email(),
        message: Joi.string().required()

      };
    
      return Joi.validate(message,schema);
    }
  
  
    exports.Message=Message;
    exports.messageSchema=messageSchema;
    exports.validatemessage=validatemessage;
  