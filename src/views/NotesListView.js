// React import
import React, { Component } from 'react';
// Redux import
import { connect } from 'react-redux';
// Style import
import { NotesListContainer } from '../styles/notesListStyles';
// Component import
import { NotesList } from '../components';
// Action import
import { fetchNotes } from '../actions';

class NotesListView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <NotesListContainer>
        <NotesList notes={notes} />
      </NotesListContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    fetchingNotes: state.notesReducer.fetchingNotes
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesListView);
