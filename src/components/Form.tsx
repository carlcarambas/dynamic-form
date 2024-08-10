/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'
import { useAppDispatch } from '../redux/store'
import { updateData, postData } from '../redux/actions'
import { IPostData } from '../interfaces'
import Field from '../components/Field'
import { Button } from '@mui/material'
import { sampleWithUnknownData } from '../redux/slices/form'

export interface IData {
  fieldName: string
  type: string
  value: string
  options?: string[]
}

const knownFields: string[] = [
  'firstName',
  'lastName',
  'emailAddress',
  'gender',
  'age',
  'testimonial',
]

const Form = () => {
  const dispatch = useAppDispatch()
  const { data }: any = useSelector((state: RootState) => state.form)

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(postData(sampleWithUnknownData))
  }

  const handleChange = (
    id: any,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newData = data.map((d: any) => {
      if (d.fieldName === id) {
        return {
          ...d,
          value: event.target.value,
        }
      }
      return d
    })

    dispatch(updateData({ data: newData }))
  }

  return (
    <form onSubmit={onSubmit}>
      {[].concat(data).map((field, index) => {
        return (
          <div key={index}>
            <Field
              id={index}
              key={index}
              fieldName={field.fieldName}
              type={field.type}
              value={field.value}
              options={field?.options}
              handleChange={handleChange}
            />
          </div>
        )
      })}
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        style={{
          marginTop: 10,
        }}
      >
        Add Random Fields
      </Button>
    </form>
  )
}

export default Form
