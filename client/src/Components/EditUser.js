import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';

export default function EditUser(id) {
  const { handleUserUpdate, error, loading, user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user.name)
  const [account_type, setAccount_Type] = useState(user.account_type)
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserUpdate({ name, account_type, password }, history)
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
      <Form onSubmit={handleSubmit}>
        <Form.Input
          value={name}
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Input
          value={account_type}
          label="Account Type"
          onChange={(e) => setAccount_Type(e.target.value)}
        />
        <Form.Input
          value={password}
          label="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Input
          value={passwordConfirmation}
          label="Confirm New Password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button loading={loading} disabled={loading}>Update</Button>
      </Form>
      <br />
      <br />
      <br />
      <Button onClick={() => deleteUser(id)}>Delete Account</Button>
    </div>
  )
}
