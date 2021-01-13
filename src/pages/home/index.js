import React from 'react'
import { Route } from 'react-router-dom'
import HomeLayout from '../../components/layout/HomeLayout'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

export default function index() {
    return (
        <HomeLayout>
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/home/login' component={LoginPage}/>
            <Route exact path='/home/register' component={RegisterPage}/>
        </HomeLayout>
    )
}
