import { Box, Grid,makeStyles, Paper,Button } from '@material-ui/core'
import React,{useState} from 'react'
import PageHeader from './layout/PageHeader'
import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon} from '@material-ui/icons';
import ReactTable from './tables/ReactTable'
import makeData from './makedata'
import {usePopup} from '../hooks/usePopup';
export default (props)=> {
    const {title,subTitle,icon}=props
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <PageHeader
                title={title}
                subTitle={subTitle}
                icon={icon}
                />
                </Grid>
                <Grid item xs={12}>
                    <Paper variant='outlined'>
                        <Box p={5}>
                <SubscriberList/>
                
                </Box>
                </Paper>
                </Grid>
            
        </Grid>
    )
}




const SubscriberList=()=>{
    const {MyPopup,openDialog}=usePopup('Title')
    
    const columns = React.useMemo(
        () => [
          {
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Last Name",
            accessor: "lastName"
          },
    
          {
            Header: "Age",
            accessor: "age"
          },
          {
            Header: "Visits",
            accessor: "visits"
          },
          {
            Header: "Status",
            accessor: "status"
          },
          {
            Header: "Profile Progress",
            accessor: "progress"
          },
          {
            Header: "Actions",
            Cell: ({ row }) => (
              <>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  onClick={openDialog}
                >
                  <EditIcon />
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  onClick={() => console.log(row.original)}
                >
                  <DeleteIcon />
                </Button>
              </>
            )
          }
        ],
    
        []
      );
    
      const data = React.useMemo(() => makeData(20), []);
    
return(<>
     <ReactTable columns={columns} data={data} add={openDialog}/>   
     <MyPopup fullWidth>
         jkdhakjsd
         </MyPopup> 
</>)
}