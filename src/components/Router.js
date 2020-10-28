import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SignUp from './SignUp'

const Router = () => {


    return (
        <Switch>
            <Route exact path="/">
                <SignUp/>
            </Route>
        </Switch>
    )
}

export default Router;