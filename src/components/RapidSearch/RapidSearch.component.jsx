import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const RapidSearchContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin-top: 1rem;
`

const FormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 0.5rem;
  flex-direction: column;
  min-width: 90%;
  height: 100px;
`

const RapidSearch = () => {
  const history = useHistory()
  const [keywords, setKeywords] = useState('')

  return (
    <RapidSearchContainer>
      <Typography color='primary' component='h2' variant='h4'>
        Rapid search
      </Typography>
      <FormContainer
        onSubmit={() => {
          history.push(`/search/${keywords}`)
        }}
      >
        <TextField
          fullWidth
          size='medium'
          color='primary'
          label='Search repositories'
          value={keywords}
          onChange={(e) => {
            e.preventDefault()
            setKeywords(e.target.value)
          }}
        />
        <Button type='submit' color='primary' variant='outlined'>
          SEARCH
        </Button>
      </FormContainer>
    </RapidSearchContainer>
  )
}

export default RapidSearch
