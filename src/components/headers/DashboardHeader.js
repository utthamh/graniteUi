import { AppBar, Box, IconButton, Toolbar, useTheme } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { SupervisedUserCircle } from '@material-ui/icons'
export default function DashboardHeader({openDrawer}) {
    const theme=useTheme();
    return (<>
        <AppBar position='fixed' style={{zIndex:theme.zIndex.drawer+1}}>
            <Toolbar>
                <IconButton color='inherit' onClick={()=>openDrawer(v=>!v)}><MenuIcon/></IconButton>
                <Box className='logo'/>
                <Box flex='1'/>
                <IconButton color='inherit'><SupervisedUserCircle/></IconButton>
            </Toolbar>
        </AppBar>
        <Box style={{...theme.mixins.toolbar}}/>
        
        </>
    )
}

