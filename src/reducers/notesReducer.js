// Action import
import {
  FETCH_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  FETCH_SINGLE_NOTE
} from '../actions/types';
import { fetchSingleNote } from '../actions/index';

const initialState = {
  notes: [],
  fetchingNotes: false
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state, fetchingNotes: true };
    case FETCH_NOTES_SUCCESS:
      return { ...state, notes: action.payload, fetchingNotes: false };
    case FETCH_NOTES_FAILURE:
      return { ...state, notes: action.payload, fetchingNotes: false };
    case ADD_NOTE_SUCCESS:
      return { ...state, notes: [...state.notes, action.payload] };
    case ADD_NOTE_FAILURE:
      return action.payload;
    case FETCH_SINGLE_NOTE:
      return { ...state, notes: [action.payload], fetchSingleNote: false };
    default:
      return state;
  }
};
