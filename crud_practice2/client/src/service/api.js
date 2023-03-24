import axios from 'axios';


const URI = "http://localhost:8000";
export const addUser = async (user)=>{
    try{
        return await axios.post(`${URI}/add`,user)
    }catch(err){
        console.log("error while calling add user api",err)
    }
}   


export const getUsers =async (id)=>{
    id = id || '';
 
     return await axios.get(`${URI}/all`,id)
    
 }


// export const getUser =async (id)=>{
//     try{
 
//      return await axios.get(`${URI}/${id}`)
//     }catch(error){
//      console.log("error while calling add user api",error)
    
//      }
//  }


export const getUser =async (id)=>{
 
     return await axios.get(`${URI}/${id}`)
    
     }
 


 export const editUser = async (id,user)=>{
    return await axios.put(`${URI}/${id}`,user)
    
}


//  export const deleteUser = async (id)=>{
//     try{
//         return await axios.delete(`${URI}/${id}`)
//     }catch(err){
//        console.log(err)
//     }
// }

export const deleteUser = async (id)=>{
    
        return await axios.delete(`${URI}/${id}`)
    
}