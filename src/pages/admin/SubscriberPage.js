import { Box, Grid,makeStyles, Paper,Button } from '@material-ui/core'
import React,{useState} from 'react'
import makeData from '../../components/makedata'

import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon} from '@material-ui/icons';
import TablePageContent from '../../components/TablePageContent';
import { usePopup } from '../../hooks/usePopup';
import RegisterForm from '../../components/forms/RegisterForm';
import { AddButton, DeleteButton, EditButton } from '../../components/Buttons/AddButton';
export default () =>{
    const {MyPopup,openDialog}=usePopup('Title')
    const title="Subscribers"
    const subtitle='Form design with validation'
    const icon=<PeopleOutlineTwoToneIcon fontSize="large" />
    const Form=RegisterForm
    
    const data = React.useMemo(() => makeData(20), []);

    const Add=<AddButton>
        Add Item
        </AddButton>
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
                <EditButton
                 
                  onClick={openDialog}
                >
                 Edit
                </EditButton>
                <DeleteButton 
                  onClick={() => console.log(row.original)}
                >
                  Delete
                </DeleteButton>
              </>
            )
          }
        ],
    
        []
      );
    
    
    return (
        <>
        <TablePageContent
        add={Add}
        columns={columns}
        data={data}
        title={title}
        subTitle={subtitle}
        icon={icon}
        />
        <MyPopup fullwidth><Form/></MyPopup>
        </>
        )
}



