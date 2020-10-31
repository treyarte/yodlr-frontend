import React, {useEffect, useState} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import {useParams} from 'react-router-dom'
import YodlerApi from '../helper/YodlerApi'
import {Redirect} from 'react-router-dom'

const User = ({currentUser}) => {
    const {id} = useParams()

    if(currentUser.id !== id) Redirect('/');
    
    const [user, setUser] = useState(null)
    useEffect(() => {
        async function getUser(id){
            const newUser = await YodlerApi.getUser(id)
            console.log(newUser);
            setUser({...newUser})        
        }

        getUser(id)
    }, [id])

    return (
        <>
        {!user ? (<div> <p>LOADING....</p> 
        </div>) : (

        <Container style={{margin: '1rem auto'}} maxWidth='sm'>
            <Card>
                <CardContent>
                    <h4>{user.firstName} {user.lastName}</h4>
                    <p>{user.email}</p>
                    <p>{user.state}</p>
                </CardContent>
            </Card>
        </Container>
        )}
        </>
        
        
    )
}

export default User