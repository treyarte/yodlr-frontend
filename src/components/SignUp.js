import React from 'react'
import Form from './Form'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/styles'
import logo from '../assets/yodler-logo.png'

import YodlerApi from '../helper/YodlerApi'

import './SignUp.css'

const useStyles = makeStyles({
    customContainer: {
        margin: '1rem',
    },
    signUpContainer: {
        width: '100%'
    },

    signUpPaper: {
        padding: '1rem'
    },
    logo: {    
        width: '100px',
    }
})


const SignUp =  () => {
    const classes = useStyles();

    const signUpUser = async (formData) => {
        const user = await YodlerApi.signUp(formData)
        console.log(user)
    }

    return(
        <div className="sign-up">
        <Container maxWidth="sm" className={classes.customContainer}> 
        <Paper elevation={4} className={classes.signUpPaper}>
            <Container className={classes.signUpContainer}>
            <img src={logo} alt="yodler logo" className={classes.logo}/>
            <h1>Sign Up!</h1>
            <Form submitAction = {signUpUser}/>
            </Container>
        </Paper>
        </Container>
        </div>
        
    )
}

export default SignUp