import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import ErrorMessage from './ErrorMessage';

const Register = () => {
  const { handleRegister, error, loading } = useContext(AuthContext)
  const [name, setName] = useState('test')
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('123456')
  const [passwordConfirmation, setPasswordConfirmation] = useState('123456')
  const history = useHistory()

  const handleSubmit = (e) => {
    if (password === passwordConfirmation) {
      e.preventDefault();
      handleRegister({ name, email, password }, history)
    } else {
      alert('Password does not match')
    }
  }

  return (
    <div>
      {error && <ErrorMessage header="Could not Register" error={error} />}
      <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' mini color='blue' textAlign='center'>
            <Image src='/logo512.png' /> Register new account
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                // label="Name"
                fluid icon='user'
                iconPosition='left'
                placeholder='Name'
                // value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Input
                // label="Email"
                fluid icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                // label="Password"
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Input
                // label={"Confirm Password"}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password Confirmation'
                type='password'
                // value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />

              <Button
                color='blue'
                loading={loading}
                disabled={loading}
                fluid size='large'>
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            <a href='/'>Contact Us</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Register;

