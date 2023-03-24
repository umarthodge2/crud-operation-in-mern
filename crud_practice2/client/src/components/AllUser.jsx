
import { useEffect, useState } from 'react'
import { Button, Table,TableBody,TableCell, TableHead, TableRow , styled} from '@mui/material'
import React from 'react'
// import { getUser,deleteUser } from '../service/api'
import { getUsers,deleteUser } from '../service/api.js'
import { Link } from 'react-router-dom'


//style
const StyledTable = styled(Table)`
  width : 90%;
  margin : 50px auto 0 auto;
`

const THead = styled(TableRow)`
  background : #000000;
  & > th {
    color: #fff;
  }


`

const TBody = styled(TableRow)`
    & > td {
      font-size: 20px;
    }
`

const  AllUsers =()=> {

  const [user,setUsers] = useState([]);



  useEffect(()=>{
    getAllUsers();
  },[]);


//   useEffect(()=>{
//     getAllUsers();
//   })


  const getAllUsers = async()=>{
   let response = await getUsers();
   setUsers(response.data); 
  }

  const deleteUserDetails = async(id)=>{
    await deleteUser(id);
    getAllUsers();
  }
 
  return (
    <>
    <div>Alluser</div>
    <StyledTable>
    <TableHead>
        <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Useranme</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>

        </THead>
    </TableHead>

    <TableBody>
      {
        user.map(user =>(
          <TBody key={user._id}>
              {/* <TableCell>{user._id}</TableCell> */}
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                {/* <Link to={`/edit/${user._id}`}>
                <Button variant='contained' style={{marginRight:10}} >Edit</Button> 
              </Link> */}
                <Button variant='contained' onClick={()=>deleteUserDetails(user._id)}>Delete</Button>

{/* 
              <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant='contained' onClick={()=>deleteUserDetails(user.id)}>Delete</Button> */}
              </TableCell>
          </TBody>
        ))
        }
      
    </TableBody>

    </StyledTable>
    
    </>
    
  )
}

export default AllUsers;

