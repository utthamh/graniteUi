import { Box, Grid,makeStyles, Paper,Button } from '@material-ui/core'
import React,{useState} from 'react'

import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon} from '@material-ui/icons';
import TablePageContent from '../../components/TablePageContent';
export default () =>{
    return (
        <TablePageContent
        title="Subscribers"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />)
}



