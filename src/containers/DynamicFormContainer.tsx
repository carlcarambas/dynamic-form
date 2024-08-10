import useEffectOnce from '../utils/useEffectOnce'
import Form from '../components/Form'

import { useAppDispatch } from '../redux/store'
import { RootState } from '../redux/reducers'
import { getData } from '../redux/actions'
import { useSelector } from 'react-redux'

import { LinearProgress } from '@mui/material'

const DynamicFormContainer = () => {
  const dispatch = useAppDispatch()
  const { isLoading, postResult } = useSelector(
    (state: RootState) => state.form
  )
  useEffectOnce(() => {
    dispatch(getData())
  })

  return (
    <div style={{ width: '100%' }}>
      <h2>Dynamic Form</h2>
      {isLoading ? <LinearProgress /> : <Form />}
      {!isLoading && postResult ? (
        <div>
          <p>Response</p>
          <code>{JSON.stringify(postResult)}</code>
        </div>
      ) : null}
    </div>
  )
}

export default DynamicFormContainer
