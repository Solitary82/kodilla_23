import { CREATE_LANE, CREATE_LANES, UPDATE_LANE, DELETE_LANE, EDIT_LANE } from './LaneActions';
import { DELETE_NOTE, CREATE_NOTE } from '../Note/NoteActions';

import omit from 'lodash/omit';

const initialState = {};

export default function lanes(state = initialState, action) {
	switch (action.type) {
		case CREATE_LANE:
		case UPDATE_LANE:
			return { ...state, [action.lane.id]: action.lane };
		case EDIT_LANE: {
			const lane = { ...state[action.id], editing: true };
			return { ...state, [action.id]: lane };
		}
		case CREATE_LANES:
			return { ...action.lanes };
		case DELETE_NOTE: {
			const newLane = { ...state[action.laneId] };
			newLane.notes = newLane.notes.filter(noteId => noteId !== action.noteId);

			return { ...state, [action.laneId]: newLane };
		}
		case CREATE_NOTE: {
			const newLane = { ...state[action.laneId] };
			newLane.notes = newLane.notes.concat(action.note.id);

			return { ...state, [action.laneId]: newLane };
		}
		case DELETE_LANE: {
			return omit(state, action.laneId);
		}
		default:
			return state;
	}
}


// // Import Actions
// import { CREATE_LANE, UPDATE_LANE, DELETE_LANE, EDIT_LANE } from './LaneActions';
// import { CREATE_NOTE, DELETE_NOTE } from '../Note/NoteActions';

// // Initial State
// const initialState = {};

// const LaneReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case CREATE_LANE:
// 			return [...state, action.lane];
// 		case UPDATE_LANE:
// 			return state.map(lane => {
// 				return lane.id === action.id ? { ...lane, ...action.lane } : lane;
// 			})
// 		case DELETE_LANE:
// 			return state.filter(lane => lane.id !== action.laneId);
// 		case CREATE_NOTE:
// 			return state.map(lane => {
// 				if (lane.id === action.laneId) {
// 					const notes = [...lane.notes, action.note.id];
// 					return { ...lane, notes };
// 				}
// 				return lane;
// 			});
// 		case DELETE_NOTE:
// 			return state.map(lane => {
// 				if (lane.id === action.laneId) {
// 					const notes = state.filter(note => note.id !== action.noteId)
// 					return { ...lane, notes };
// 				}
// 				return lane;
// 			});
// 		case EDIT_LANE:
// 			return state.map(lane => {
// 				if(lane.id === action.laneId){
// 					lane.editing = true
// 					return lane
// 				}
// 				return lane
// 			});
//    	default:
//       	return state;
//   }
// };

// export default LaneReducer;
