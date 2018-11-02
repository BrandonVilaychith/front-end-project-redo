// Axios import
import axios from 'axios';
// Type import
import {
  FETCH_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  FETCH_SINGLE_NOTE
} from './types';

export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES });
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};

export const addNote = note => dispatch => {
  axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response => {
      note._id = response.data.success;
      dispatch({ type: ADD_NOTE_SUCCESS, payload: note });
    })
    .catch(error => {
      dispatch({ type: ADD_NOTE_FAILURE, payload: error });
    });
};

export const fetchSingleNote = id => dispatch => {
  dispatch({ type: FETCH_NOTES });
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      dispatch({ type: FETCH_SINGLE_NOTE, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};
