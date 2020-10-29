import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const Form = ({submitAction}) => {
    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submitAction(formData);
        setFormData(INITIAL_STATE)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField name="firstName"  label="First Name"  variant="filled" required fullWidth 
                style={{margin: 10}} margin="dense" onChange={handleChange} value={formData.firstName}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField name="lastName" label="Last Name" variant="filled" required fullWidth 
            style={{margin: 10}} margin="dense" onChange={handleChange} value={formData.lastName}/>

            </Grid>
            </Grid>
            <TextField name="email" label="Email" variant="filled" required fullWidth style={{margin: 10}} 
            margin="dense" onChange={handleChange} value={formData.email}/>
            <Button variant="outlined" style={{margin: 10}} fullWidth type="submit">
                Sign Up
            </Button>
        </form>
    )
}

export default Form;