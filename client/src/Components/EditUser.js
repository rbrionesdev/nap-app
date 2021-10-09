import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
import ErrorMessage from './ErrorMessage';
import Moon from '../imgs/moon.png'
import axios from 'axios';

export default function EditUser(id) {
  const { handleUserUpdate, error, loading, user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user.name)
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserUpdate({ name, password }, history)
  }

  const deleteUser = async () => {
    try {
        await axios.delete("/api/auth");
        localStorage.removeItem("access-token")
        setUser(null)
        history.push("/")
    } catch (error) {
        alert("error deleting account");
        console.log(error);
    }
  }


  return (
    <div>
      {error && <ErrorMessage header="Could not Update" error={error} />}
      <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' mini color='blue' textAlign='center'>
            <Image src={Moon} /> Update new account
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                // label="Name"
                fluid icon='user'
                iconPosition='left'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Input
                // label="Password"
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='New Password'
                type='password'
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Input
                // label="Password"
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm New Password'
                type='password'
                // value={password}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <Button color='blue' fluid size='large'>Update</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}
