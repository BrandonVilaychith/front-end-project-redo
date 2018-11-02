// React import
import React from 'react';
// Styles import
import { CardLink, NoteTitle, NoteBody } from '../styles/notesListStyles';

const Note = props => {
  const { title, textBody, _id } = props.note;
  return (
    <CardLink to={`/note/get/${_id}`}>
      <NoteTitle>{title}</NoteTitle>
      <NoteBody>{textBody}</NoteBody>
    </CardLink>
  );
};

export default Note;
