/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createSlice,
} from '@reduxjs/toolkit';
import { IData } from '../../../components/Form';


export const sampleWithUnknownData: IData[] = [
  {
    fieldName: 'unknownField',
    type: 'select',
    value: 'Unknown',
    options: ['1', '2', '3'],
  },
  {
    fieldName: 'randomField',
    type: 'checkbox',
    value: 'Random Checkbox',
  }
]

const sampleFormData: IData[] = [
  {
    fieldName: 'firstName',
    type: 'text',
    value: 'Carl',
  },
  {
    fieldName: 'lastName',
    type: 'text',
    value: 'Carambas',
  },
  {
    fieldName: 'gender',
    type: 'select',
    value: '',
    options: ['male', 'female'],
  },
  {
    fieldName: 'age',
    type: 'number',
    value: '32',
  },
  {
    fieldName: 'emailAddress',
    type: 'email',
    value: 'my@mail.com',
  },
  {
    fieldName: 'testimonial',
    type: 'text',
    value:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolore.',
  },
]

interface IFormData {
  success?: boolean;
  message?: string;
  data: object[];
  isLoading: boolean;
  postResult?: any;
}

const initialState: IFormData = {
  success: false,
  message: '',
  data: [],
  isLoading: false,
  postResult: null,
};


const formSlice = createSlice({
  name: 'form',
  initialState,

  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    getDataSuccess(state, { payload }) {
      state.isLoading = false;
      state.data = payload.data;
    },
    postDataSuccess(state, { payload }) {
      state.isLoading = false;
      state.data = payload;
      state.postResult = payload;
    },
    getDataFailed(state) {
      state.isLoading = false;
    },
    updateData(state, { payload }) {
      state.data = payload.data;
    },
  },
});

export const {
  getDataSuccess,
  postDataSuccess,
  updateData,
  startLoading,
  stopLoading,
} = formSlice.actions;

export default formSlice.reducer;

export const getData = () => async (dispatch: React.Dispatch<React.SetStateAction<any>>) => {
  try {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(getDataSuccess({ data: sampleFormData }));
      dispatch(stopLoading());
    }, 2000)
    
  } catch (error) {
    console.error('Error fetching data ', error);
  }
};

export const postData = (randomInputFields: IData[]) => async (dispatch: React.Dispatch<React.SetStateAction<any>>) => {
  try {
    console.log('PPARAMS ', randomInputFields)
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(postDataSuccess([ ...sampleFormData , ...randomInputFields]));
      dispatch(stopLoading());
    }, 2000)
    
  } catch (error) {
    console.error('Error posting data', error);
  }
};
