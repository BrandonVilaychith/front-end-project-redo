// React imports
import React, { Component } from 'react';
// Component imports
import { NoteForm } from '../components';
// Actions imports
import { addNote } from '../actions';
// Redux imports
import { connect } from 'react-redux';
// Styles import
import { NoteFormContainer } from '../styles/noteFormStyles';

class NoteFormView extends Component {
  render() {
    const { addNote } = this.props;
    return (
      <NoteFormContainer>
        <NoteForm addNote={addNote} />
      </NoteFormContainer>
    );
  }
}

export default connect(
  null,
  { addNote }
)(NoteFormView);
