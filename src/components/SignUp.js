import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'
import logo from '../assets/yodler-logo.png'
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
    return(
        <div className="sign-up">
        <Container maxWidth="sm" className={classes.customContainer}> 
        <Paper elevation={4} className={classes.signUpPaper}>
            <Container className={classes.signUpContainer}>
            <img src={logo} alt="yodler logo" className={classes.logo}/>
            <h1>Sign Up!</h1>
           <form>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField  label="First Name"  variant="filled" required fullWidth style={{margin: 10}} margin="dense"/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField label="Last Name" variant="filled" required fullWidth style={{margin: 10}} margin="dense"/>

            </Grid>
            </Grid>
            <TextField label="Email" variant="filled" required fullWidth required style={{margin: 10}} margin="dense"/>
            <Button variant="outlined" style={{margin: 10}} fullWidth>
                Sign Up
            </Button>
           </form>
            </Container>
        </Paper>
        </Container>
        </div>
        
    )
}

export default SignUp