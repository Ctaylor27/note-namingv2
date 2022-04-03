import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Toolbar, IconButton, Typography} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AppHeader = ({drawerState, openDrawer}) => {
    return (
        <div>
            <AppBar position='relative' style={{zIndex: "1500", backgroundColor: "#005e02"}}>
            <Toolbar >
                <IconButton onClick={openDrawer()}>
                    {drawerState ? <KeyboardArrowDownIcon /> : <MenuIcon/> }
                </IconButton>
                <Typography style={{marginLeft: '1rem'}} variant="h5">Note Naming</Typography>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppHeader
