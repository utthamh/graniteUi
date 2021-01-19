import { Box, Grid, Paper, Typography, useTheme } from '@material-ui/core'
import React, { useState } from 'react'
import DashboardHeader from '../headers/DashboardHeader'
import Sidebar from '../sidebar/Sidebar'
import Table from '../tables/Table'
export default function DashboardLayout() {
    const [open,setDrawerOpen]=useState(false)
    const theme=useTheme()
    return (
        <div>
            <DashboardHeader openDrawer={setDrawerOpen}/>
            
            <Box display='flex'>
                
            <Sidebar drawerOpen={open} closeDrawer={()=>setDrawerOpen(v=>!v)}/>
           
            <Box  flex='1' p={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Paper variant='outlined' >
                            <Box my={1} mx={2}>
                            <Typography variant='h6'>Heading</Typography>
                            </Box>
                        </Paper>
                        
                    </Grid>
                    <Grid item xs={12} >
                        <Paper variant='outlined' >
                            <Box my={1} mx={2}>
                            <Table/>
                            </Box>
                        </Paper>
                        
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            
        </div>
    )
}

