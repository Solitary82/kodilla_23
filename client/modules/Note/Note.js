import React, { PropTypes } from 'react';
import styles from './Note.css';
import ItemTypes from '../Kanban/itemTypes';
import {DragSource, DropTarget} from 'react-dnd';
import {compose} from 'redux';

class Note extends React.Component {

	render() {
		const {
			connectDragSource,
			connectDropTarget,
			isDragging,
			editing,
			children,
		} = this.props;

		// jeśli edytujemy to przepuszczamy komponent (uniemożliwiamy tym samym przeciąganie komponentu edytowanego)
		const dragSource = editing ? a => a : connectDragSource;

		return dragSource(connectDropTarget(
			<li
				className={styles.Note}
				style={{
				opacity: isDragging ? 0 : 1,
			  }}
			>
			  {children}
			</li>
		));	 
	}
}
 

Note.propTypes = {
	children: PropTypes.any,
};

const noteSource = {
	beginDrag(props) {
		return {
			id: props.id,
			laneId: props.laneId,
		};
	},
	isDragging(props, monitor) {
		return props.id === monitor.getItem().id;
	}
};

const noteTarget = {
	hover(targetProps, monitor) {
		const sourceProps = monitor.getItem();

		if (targetProps.id !== sourceProps.id) {
			targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
		}
	}
}; 

export default compose(
	DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
	  connectDragSource: connect.dragSource(),
	  isDragging: monitor.isDragging()
	})),
	DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
	  connectDropTarget: connect.dropTarget()
	}))
)(Note);
 

// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// // Import Style
// import styles from './Note.css';

// class Note extends Component {
//   render() {
//     return (
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// Note.propTypes = {
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Note);
