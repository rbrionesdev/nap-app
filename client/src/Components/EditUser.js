import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
import ErrorMessage from './ErrorMessage';

export default function EditUser() {
  const { handleUserUpdate, error, user } = useContext(AuthContext);
  const [name, setName] = useState(user.name)
  const [account_type, setAccount_Type] = useState(user.account_type)
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserUpdate({ name, account_type, password }, history)
  }
  return (
    <div>
      {error && <ErrorMessage header="Could not Update" error={error} />}
      <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' mini color='blue' textAlign='center'>
            <Image src='/logo512.png' /> Update account
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                // label="Name"
                value={name}
                placeholder='Change Name'
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Input
                // label="Account Type"
                value={account_type}
                placeholder='Change Account Type'
                onChange={(e) => setAccount_Type(e.target.value)}
              />
              <Form.Input
                // label="New Password"
                value={password}
                placeholder='New Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Input
                // label="Confirm New Password"
                value={passwordConfirmation}
                placeholder='New Password Confirmation'
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <Button
                color='blue'
                fluid size='large'>
                Update
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}
