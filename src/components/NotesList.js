// React imports
import React from 'react';
// Component imports
import { Note } from '../components';
// Styles import
import { NotesListTitle, NotesContainer } from '../styles/notesListStyles';

const NotesList = props => {
  const { notes } = props;
  const notesList = notes.map(note => {
    return <Note note={note} key={note._id} />;
  });
  return (
    <div>
      <NotesListTitle>Your Notes:</NotesListTitle>
      <NotesContainer>{notesList}</NotesContainer>
    </div>
  );
};

export default NotesList;
