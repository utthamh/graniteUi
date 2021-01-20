import { Toolbar } from '@material-ui/core';
import React from 'react'
import { Route } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout'
import SubscriberPage from './SubscriberPage';
import SubscriptionPage from './SubscriptionPage';

export default function index() {
    const base='/admin'  
const menus = [
    {
      title: "SubScription",
      submenu: [
        {
          title: "SubScriber",
          link:base+'/'
        },
        {
          title: "Subscription",
          link:base+'/subscription'
        }
      ]
    },
    {
      title: "name2"
    },
    {
      title: "name3"
    },
    {
      title: "name4"
    }
  ];
  
const Routes=[{
    path:base+'/subscription',
    component:SubscriptionPage
},
{
    path:base+'/',
    component:SubscriberPage
}

]











    return (
        <DashboardLayout menus={menus}>
            <Toolbar/>
            {
                Routes?.map(item=><Route {...item}/>)
            }
            </DashboardLayout>
    )
}
