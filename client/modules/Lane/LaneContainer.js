import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
// 	};
// };

const mapStateToProps = (state, ownProps) => ({
	laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
	...laneActions,
	addNote: createNoteRequest,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lane);
