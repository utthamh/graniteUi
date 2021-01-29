import React from 'react'
import ProductCard from './../../components/cards/ProductCard';
import ScrooView from '../../components/courosal/MyCourosol'
import { Box, Grid, Paper } from '@material-ui/core'
import FlashSale from '../../components/FlashSale'
import Subscribe from '../../components/Subscribe'
import ProductTabs from '../../components/Tabs/ProductTabs';
import SideLeft from '../../components/layout/SideBarLayout';
import ProductChips from '../../components/layout/ProductChip';


export default function ProductPage() {
    return (
        <>
        <Box my={5}/>
            <ScrooView/>
                


            {/* <ProductTabs/> */}

            <ProductChips/>




        <Grid container spacing={2}>
                <Grid item xs={12} lg={3} md={3} >
                    <SideLeft/>
                </Grid> 
             <Grid item xs={12} lg={9} md={9}>
                    <ProductCard/>
            </Grid>
        </Grid>

          
            
            
        </>
    )
}