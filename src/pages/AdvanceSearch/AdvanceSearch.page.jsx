import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CountUp from 'react-countup'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { ButtonAppBar } from '../../components'
import { fetchRepos } from '../../redux/FetchRepositories/FetchRepositories.actions'
import {
  selectIsfetching,
  selectError,
  selectLinks,
  selectReposInfo,
} from '../../redux/FetchRepositories/FetchRepositories.selectors'
import { Repositories } from '../../components'

const DEFAULT_FORM_INPUTS = {
  keywords: '',
  language: 'javascript',
  stars: '1000',
  forks: '',
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const AdvanceSearchPage = ({ reposInfo, isFetching, links, fetchRepos }) => {
  const classes = useStyles()
  const [formInputs, setFormInputs] = useState({
    keywords: '',
    language: '',
    stars: '',
    forks: '',
  })

  const handleChange = (event) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    })
  }

  const constructQuery = () => {
    const { keywords, language, stars, forks } = formInputs
    if (!keywords && !language && !stars && !forks) {
      setFormInputs(DEFAULT_FORM_INPUTS)

      const languageString = `language:${DEFAULT_FORM_INPUTS.language}`
      const starsString = `stars:>${DEFAULT_FORM_INPUTS.stars}`
      const queryUrl = `https://api.github.com/search/repositories?q=${languageString}+${starsString}&per_page=10`
      fetchRepos(queryUrl)
    } else {
      const keywordsString = keywords ? keywords : ''
      const languageString = language ? `language:${language}` : ''
      const starsString = stars ? `stars:>${stars}` : ''
      const forksString = forks ? `forks:>${forks}` : ''

      const q = [
        keywordsString,
        languageString,
        starsString,
        forksString,
      ].reduce((acc, str) => {
        if (!acc) {
          return str
        } else {
          return str ? acc + '+' + str : acc
        }
      }, '')
      const queryString = `https://api.github.com/search/repositories?q=${q}&per_page=10`
      fetchRepos(queryString)
    }
  }
  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth='sm'>
        <Typography
          style={{ margin: '1rem', textAlign: 'center' }}
          variant='h4'
          color='primary'
          component='h2'
        >
          Advanced search
        </Typography>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault()
            constructQuery()
          }}
        >
          <FormControl className={classes.formControl}>
            <TextField
              onChange={handleChange}
              id='keywords'
              name='keywords'
              label='Keywords'
              value={formInputs.keywords}
            />
            <FormHelperText>Ex: cats</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id='language'>Choose a language</InputLabel>
            <Select
              labelId='language'
              id='language'
              name='language'
              value={formInputs.language}
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              <MenuItem value=''>All</MenuItem>
              <MenuItem value='actionscript'>ActionScript</MenuItem>
              <MenuItem value='c'>C</MenuItem>
              <MenuItem value='csharp'>C#</MenuItem>
              <MenuItem value='cpp'>C++</MenuItem>
              <MenuItem value='clojure'>Clojure</MenuItem>
              <MenuItem value='coffeescript'>CoffeeScript</MenuItem>
              <MenuItem value='css'>CSS</MenuItem>
              <MenuItem value='go'>Go</MenuItem>
              <MenuItem value='haskell'>Haskell</MenuItem>
              <MenuItem value='html'>HTML</MenuItem>
              <MenuItem value='java'>Java</MenuItem>
              <MenuItem value='javascript'>JavaScript</MenuItem>
              <MenuItem value='lua'>Lua</MenuItem>
              <MenuItem value='matlab'>MATLAB</MenuItem>
              <MenuItem value='objective-c'>Objective-C</MenuItem>
              <MenuItem value='perl'>Perl</MenuItem>
              <MenuItem value='php'>PHP</MenuItem>
              <MenuItem value='python'>Python</MenuItem>
              <MenuItem value='r'>R</MenuItem>
              <MenuItem value='ruby'>Ruby</MenuItem>
              <MenuItem value='scala'>Scala</MenuItem>
              <MenuItem value='shell'>Shell</MenuItem>
              <MenuItem value='swift'>Swift</MenuItem>
              <MenuItem value='tex'>TeX</MenuItem>
              <MenuItem value='vim script'>Vim script</MenuItem>
            </Select>
            <FormHelperText>Among popular languages</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id='stars'
              onChange={handleChange}
              name='stars'
              label='Stars'
              value={formInputs.stars}
            />
            <FormHelperText>Minimum number of stars</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              onChange={handleChange}
              id='forks'
              name='forks'
              label='Forks'
              value={formInputs.forks}
            />
            <FormHelperText>Minimum number of forks</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button type='submit' variant='outlined' color='primary'>
              SEARCH
            </Button>
          </FormControl>
        </FormContainer>
        {reposInfo ? (
          <Typography variant='subtitle1' component='p'>
            <CountUp start={0} end={reposInfo.total_count} separator=',' />{' '}
            results
          </Typography>
        ) : null}
        {!isFetching && !reposInfo ? null : (
          <Repositories reposInfo={reposInfo} isLoading={isFetching} />
        )}
        {links.length ? (
          <div>
            {links.map((link, index) => {
              const { title, url } = link
              return (
                <Button
                  onClick={(e) => {
                    e.preventDefault()
                    window.scroll({
                      top: 100,
                      left: 0,
                      behavior: 'smooth',
                    })
                    fetchRepos(url)
                  }}
                  key={index}
                  variant='outlined'
                  color='secondary'
                  style={{ margin: '0.75rem' }}
                >
                  {title}
                </Button>
              )
            })}
          </div>
        ) : null}
      </Container>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  reposInfo: selectReposInfo,
  isFetching: selectIsfetching,
  error: selectError,
  links: selectLinks,
})

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: (url) => dispatch(fetchRepos(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceSearchPage)
