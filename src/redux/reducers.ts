import { combineReducers } from 'redux';

import form from './slices/form';

const rootReducer = combineReducers({ form });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
