
import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React, { useState , useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

import { editUser } from '../service/api'
import { getUser } from '../service/api'



import   Link from '@mui/material';

//style
const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
`

const defaultValue = {
    name:'',
    username: '',
    email:'',
    phone:''
}


const EditUser=()=> {

    //useState
    const [user,setUser] = useState(defaultValue);
    const {name, username, email, phone} = user;
    const navigate = useNavigate();
     const {id} = useParams();

    useEffect(()=>{
        loadUserDetails();
       
    },[]);

    const loadUserDetails = async()=>{ 
        const response = await getUser(id);
        setUser(response.data);
    }


  


    //add user details     -sync(user)
    const editUserDetails = async ()=>{
        const response = await editUser(id , user);
        navigate('/all')
        // setUser(response.data)
    }

    //on value change
    const onValueChange= (e)=>{
        //spread operation -> (...user) and both are variable name and value 
        setUser({...user, [e.target.name]:e.target.value})
       

        // console.log(e.target.name,e.target.value)
    }



    


  return (
   <>
    <Container>
        <Typography variant='h4'>Edit User</Typography>
      <FormControl>
            <InputLabel>Name</InputLabel>
            {/* <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name || ""}/> */}
            {/* <Input onChange={(e)=>onValueChange(e)} name="name" defaultValue={user.name}/> */}
            <Input onChange={(e)=>onValueChange(e)} name="name" value={name}/>
      </FormControl>

      <FormControl>
            <InputLabel>Username</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)} name="username" value={username}/>
            {/* <Input  onChange={(e)=>onValueChange(e)} name="username" value="umar"/> */}
      </FormControl>

      <FormControl>
            <InputLabel>Email</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)} name="email" value={email}/>
      </FormControl>

      <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)} name="phone" value={phone}/>
      </FormControl>

      <FormControl>
        <Button variant='contained' onClick={()=>editUserDetails()}>Edit User</Button>
      </FormControl>
    </Container>
   </>
  )
}

export default EditUser