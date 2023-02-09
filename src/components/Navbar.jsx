import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import AbcIcon from '@mui/icons-material/Abc';
import { Mail, Notifications } from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: '40%',
    padding: "0 1%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    gap:"0.6rem",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserProfilePic = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"0.6rem",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

const Navbar = () => {
    const [open,setopen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    A Better way to Connect
                </Typography>
                <AbcIcon sx={{ display: { xs: "block", sm: "none" }, fontSize: 60 }} />
                <Search><InputBase placeholder="Search..." /></Search>
                <Icons>
                    <Badge  badgeContent={2} color="error">
                        <Mail/>
                    </Badge>
                    <Badge  badgeContent={4} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar sx={{width:30,height:30}} src="https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-2/images/avatar/avatar-10.png" onClick={e=>setopen(true)}>DP</Avatar>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        open={open}
                        onClose={(e)=>setopen(false)}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        sx={{marginTop:"2rem"}}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Icons>
                <UserProfilePic onClick={e=>setopen(true)}>
                    <Avatar sx={{width:35,height:35}} src="https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-2/images/avatar/avatar-10.png">DP</Avatar>
                </UserProfilePic>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar