// React import
import React, { Component } from 'react';
// Action imports
// import { fetchSingleNote, deleteNote } from '../actions';
import { fetchSingleNote } from '../actions';
// Redux imports
import { connect } from 'react-redux';
// Component imports
import { SingleNote } from '../components';
// Loader import
// import Loader from 'react-loader-spinner';
// Styles import
import { SingleNoteContainer } from '../styles/singleNoteStyles';

class SingleNoteView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleNote(id);
  }

  render() {
    return (
      <SingleNoteContainer>
        {this.props.notes.map(note => {
          return <SingleNote note={note} key={note._id} />;
        })}
      </SingleNoteContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes
  };
};

export default connect(
  mapStateToProps,
  // { fetchSingleNote, deleteNote }
  { fetchSingleNote }
)(SingleNoteView);
