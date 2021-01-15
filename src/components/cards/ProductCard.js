import { Avatar, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


export default function ProductCard() {
   
    return (
       
        <div  style={{height:'230px'}}>
            <Avatar variant='square' style={{height:'100%',width:'100%',marginBottom:'10px'}}/>
            <Typography className='text-center '>Product Name</Typography>
        </div>
        
    )
}
