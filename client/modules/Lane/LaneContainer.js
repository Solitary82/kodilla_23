import { connect } from 'react-redux';
import Lane from './Lane';
import { createNoteRequest } from '../Note/NoteActions';
import { deleteLane, updateLane, editLane } from './LaneActions';

const mapStateToProps = (state, ownProps) => ({
	laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
	editLane,
	deleteLane,
	updateLane,
	addNote: createNoteRequest,
};
 
 
// const mapDispatchToProps = {
// 	...laneActions,
// 	addNote: createNoteRequest,
// };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lane);
