// React import
import React, { Component } from 'react';
// Component import
import { Navigation } from './components';
// View imports
import { NotesListView, AddNoteFormView, SingleNoteView } from './views';
// React Router import
import { Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={props => <NotesListView {...props} />} />
        <Route
          path="/note/get/:id"
          render={props => <SingleNoteView {...props} />}
        />
        <Route
          path="/add-note"
          render={props => <AddNoteFormView {...props} />}
        />
      </div>
    );
  }
}

export default App;
