// React imports
import React, { Component } from 'react';
// Styles import
import {
  StyledNoteForm,
  NoteFormTitle,
  NoteFormInput,
  NoteFormTextarea,
  NoteFormButton
} from '../styles/noteFormStyles';

// React router import
import { withRouter } from 'react-router-dom';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: '',
        textBody: ''
      }
    };
  }

  changeHandler = e => {
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (!this.state.note.title && !this.state.note.textBody) {
      return alert('Missing Information');
    }
    this.props.addNote(this.state.note);
    this.props.history.push('/');
  };

  render() {
    const { title, textBody } = this.state.note;
    return (
      <StyledNoteForm>
        <NoteFormTitle>Create New Note:</NoteFormTitle>
        <NoteFormInput
          required
          type="text"
          name="title"
          placeholder="Note Title"
          value={title}
          autoComplete="off"
          onChange={this.changeHandler}
        />
        <NoteFormTextarea
          required
          type="text"
          name="textBody"
          placeholder="Note Content"
          value={textBody}
          autoComplete="off"
          onChange={this.changeHandler}
        />
        <br />
        <NoteFormButton onClick={this.submitHandler}>Add Note</NoteFormButton>
      </StyledNoteForm>
    );
  }
}

export default withRouter(NoteForm);
