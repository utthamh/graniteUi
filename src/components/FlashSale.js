import { Box, Typography } from '@material-ui/core'
import React from 'react'
import FlashSaleCard from './cards/FlashSaleCard'

export default function FlashSale() {
    return (
        <Box overflow='scroll' width='100vw'>
            <Box bgcolor='#000' height={'2px'}/>
            <Box bgcolor='#F9C74F' height={'2px'} />
            <Box display='flex' justifyContent={'space-between'} p={2}>
                <Typography variant='h5'>Flash Sale</Typography>
                <Box p={1} textAlign='center' fontWeight='900'  bgcolor='#F9C74F'>End In 10:10:10</Box>
            </Box>
            <Box overflow='auto'>
            <Box display='flex' overflow='scroll' flexWrap='nowrap'>
            {Array(20).fill(0).map(item=><FlashSaleCard/>)}
            </Box>
            </Box>
            <Box bgcolor='#000' height={'2px'} mt={2}/>
            <Box bgcolor='#F9C74F' height={'2px'} mb={5}/>
        </Box>
    )
}
