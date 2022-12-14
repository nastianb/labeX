import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import { FormContainer } from '../../components/FormContainer'
import { TextField, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
import { useTripsList } from '../../hooks/useTripsList'

const ApplicationPage = () => {
  const trips = useTripsList()
  const [form, onChangeInput, clear] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  })

  const onSubmitApplication = (e) => {
    e.preventDefault()
    console.log(form)
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/trips/${form.trip.id}/apply`, body)
    .then((response) => {
      alert('A sua inscricao foi submetida!')
      clear();
      

    })
  }

  return <div>
    <PageTitle title={'Aplicar para viagem'} />
    <FormContainer onSubmit={onSubmitApplication}>
      <TextField 
        label={'Nome do candidato'} 
        onChange={onChangeInput}
        value={form['name']}
        name={'name'}
        required
        
      />
      <TextField 
        label={'Idade'} type={'number'} 
        onChange={onChangeInput}
        value={form['age']}
        name={'age'}
        required
      />
      <TextField 
        label={'Texto de aplicação'} helperText="Explique por que você é uma boa pessoa candidata" 
        onChange={onChangeInput}
        value={form['applicationText']}
        name={'applicationText'}
        required
      />
      <TextField 
        label={'Profissão'} 
        onChange={onChangeInput}
        value={form['profession']}
        name={'profession'}
        required
      />
      <FormControl>
        <InputLabel id="select-paises">Países</InputLabel>
        <Select
          labelId="select-paises"
          onChange={onChangeInput}
          value={form['country']}
          name={'country'}
          required
        >
          <MenuItem value={'brasil'}>Brasil</MenuItem>
          <MenuItem value={'argentina'}>Argentina</MenuItem>
          <MenuItem value={'eua'}>Estados Unidos</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="select-viagens">Viagens</InputLabel>
        <Select
          labelId="select-viagens"
          onChange={onChangeInput}
          value={form['trip']}
          name={'trip'}
         
      
        >
          {trips.map((trip) => {
            return <MenuItem value={trip}>{trip.name}</MenuItem>
          })}
        </Select>
      </FormControl>
      <Button variant={'contained'} color={'secondary'} type={'submit'}>Inscrever-se</Button>
    </FormContainer>
  </div>
}

export default ApplicationPage