/* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//   TextField,
//   FormControl,
//   Select,
//   MenuItem,
//   InputLabel,
// } from '@mui/material';

import {
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControl,
} from '@mui/material'
import { IData } from './Form'

interface Field extends IData {
  id: string
  handleChange: () => null
}

const Field = ({
  id,
  fieldName,
  type,
  value,
  options = [],
  handleChange,
}: any) => {
  let field

  switch (type) {
    case 'select':
      field = (
        <>
          <InputLabel id={`select-label-${id}`} variant="outlined" shrink>
            {fieldName}
          </InputLabel>
          <Select
            id={fieldName}
            labelId={`select-label-${id}`}
            label={fieldName}
            value={value}
            variant="outlined"
            onChange={(event) => handleChange(fieldName, event)}
          >
            {options.map((option: string, index: number) => {
              return (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              )
            })}
          </Select>
        </>
      )
      break
    default:
      field = (
        <TextField
          id={fieldName}
          label={fieldName}
          defaultValue={value}
          variant="outlined"
          type={type}
          multiline={type === 'multiline'}
          onChange={(event) => handleChange(fieldName, event)}
        />
      )
      break
  }

  return (
    <div style={{ marginTop: '1em' }}>
      <FormControl fullWidth>{field}</FormControl>
    </div>
  )
}

export default Field
