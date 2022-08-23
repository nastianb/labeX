import React from 'react'
import { Typography } from '@material-ui/core'

const PageTitle = (props) => {
  return <Typography color= "secondary" variant="h1" align={'center'} gutterBottom>{props.title}</Typography>
}

export default PageTitle