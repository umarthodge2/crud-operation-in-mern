import mongoose from "mongoose";

// import autoIncrement from 'mongoose-auto-increment';
const UserSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    phone :{
        type : String,
        required : true
    }

});

// autoIncrement.initialize(mongoose.connect);
// UserSchema.plugin(autoIncrement.plugin,'User');

const User = mongoose.model("User",UserSchema);

export default User;
// module.exports = user;