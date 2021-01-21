import { Toolbar } from '@material-ui/core';
import React from 'react'
import { Route } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout'
import BrandListPage from '../brand/BrandListPage';
import CategoryPage from '../catergory/CategoryPage';
import VarientListPage from '../varients/VarientListPage';
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
      title: "Category",
      link:base+'/category'
    },
    {
      title: "Brands",
      link:base+'/brand'
    },
    {
      title: "Varient",
      link:base+'/varient'
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
  path:base+'/category',
  component:CategoryPage
},
{
  path:base+'/brand',
  component:BrandListPage
},
{
  path:base+'/varient',
  component:VarientListPage
},
{
    path:base+'/',
    exact:true,
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
