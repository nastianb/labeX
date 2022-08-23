import React from 'react'
import axios from 'axios';
import { Typography } from '@material-ui/core'
import styled from "styled-components";
import { TextField, Button } from '@material-ui/core'
import { LoginForm } from './styles'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import PageTitle from '../../components/PageTitle';

const FormContainer = styled.form`
display: grid;
gap: 16px;
`

const LoginPage = () => {
  const navigate = useNavigate()
  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/login', body).then((response) => {
      window.localStorage.setItem('token', response.data.token)
      navigate('/viagens')
    })
  }
  return (
    <div>
      <PageTitle title={'Login'} />
      <LoginForm onSubmit={onSubmitLogin}>
      <TextField
        label={'Email'}
        type={'email'}
        onChange={onChangeInput}
        value={form['email']}
        name={'email'}
        required
      />
      <TextField
        label={'Senha'}
        type={'password'}
        onChange={onChangeInput}
        value={form['password']}
        name={'password'}
        
        required
      />
      <Button variant={'contained'} color={'secondary'} type={'submit'}>Entrar</Button>
    </LoginForm>

    </div>
  )
}
export default LoginPage 
