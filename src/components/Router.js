import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignUp from './SignUp'
import User from './User'

const Router = () => {

    const [currentUser, setCurrentUser] = useState(null)

    function login(user){
        setCurrentUser({...user});
       
    }

    return (
        <Switch>
            <Route exact path="/">
                <SignUp login={login}/>
            </Route>
            <Route exact path="/users/:id">
                <User currentUser={currentUser}/>
            </Route>
        </Switch>
    )
}

export default Router;