// Redux import
import { combineReducers } from 'redux';
// Reducer import
import { notesReducer } from './notesReducer';

export default combineReducers({
  notes: notesReducer
});
