import React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


//style
const Header = styled(AppBar)`
    background : #111111
`;

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:white;
    text-decoration:none;
`

function NavBar() {
  return (

    <>
    <Header position='static '>
        <Toolbar>
            <Tabs to="/">Crud Operation</Tabs>
            <Tabs to="/add">Add User</Tabs>
            <Tabs to="/all">All User</Tabs>
        </Toolbar>
    </Header>
    
    </>
    
  )
}

export default NavBar