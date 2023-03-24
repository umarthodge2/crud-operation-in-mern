
import User from "../models/User.js";


//addUser
export const addUser =async(request,response)=>{

    const user = request.body;
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({message:error.message} )
    }
}


//getUsers
export const getUsers =async (request,response)=>{

    // const user = request.body;
    // console.log(user);
    try{
        const users = await User.find({});
        response.status(200).json(users)
    }catch(error){

        response.status(409).json({message:error.message})
        // console.log(user)
    }
}


//getUser
export const getUser =async (request,response)=>{

    // const user = request.body;
    console.log(request.params.id);
    try{
        const users = await User.find({_id: request.params.id});

        // const user = await User.findById(request.params.id);
        response.status(200).json(users)
    }catch(error){
        response.status(404 ).json({message:error.message})
       
    }
}


// export const editUser = async (request, response) => {
//     let user = request.body;

//     const editUser = new User(user);
//     try{
//         await User.updateOne({_id: request.params.id}, {
//             $set: {
//                 name: request.params.name,
//                 username: request.params.username,
//                 email: request.params.email,
//                 phone: request.params.phone
//               }
//             },)

//         // await User.updateOne({_id: request.params.id}, editUser);
//         // response.status(201).json(editUser);
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }





/* =====================================================================
export const editUser =async (request,response)=>{

    const user = request.body;
    const editUser = new User(user);
    // console.log(user);
    try{
     await User.updateOne({_id: request.params.id},{
        $set: {
          name: request.body.name
        }
      },);
 
        // const user = await User.findByIdAndUpdate(request.params.id);
        response.status(200).json(editUser)
    }catch(error){

        response.status(409).json({message:error.message})
        // console.log(object)
    }
}






// ================================output done functioning properly=============================================*/





export const editUser =async (request,response)=>{

    const user = request.body;
    const editUser = new User(user);
    // console.log(user);
    try{
     await User.findByIdAndUpdate({_id: request.params.id},{
        $set: { 
          name: request.body.name,
          username: request.body.username,
          email: request.body.email,
          phone: request.body.phone
        }
      },);
 
        // const user = await User.findByIdAndUpdate(request.params.id);
        response.status(200).json(editUser)
    }catch(error){

        response.status(409).json({message:error.message})
        // console.log(object)
    }
}

// ==================================================================




export const deleteUser =async (request,response)=>{


    try{
        const user = await User.deleteOne({_id: request.params.id});
 
        // const user = await User.findById(request.params.id);
        response.status(200).json({message : "user deleted successfully"})
        console.log(user)
    }catch(error){

        response.status(409).json({message:error.message})
        // console.log()
    }
}

