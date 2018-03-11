import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';
import * as laneActions from '../Lane/LaneActions';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';

const Kanban = (props) => (
  <div>
    <button
      className={styles.AddLane}
      onClick={() => props.createLane({
        name: 'New lane',
      })}
    >Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLaneRequest: PropTypes.func
};

const mapDispatchToProps = {
	...laneActions,
	createLane: createLaneRequest,
 };
 

const mapStateToProps = state => ({
	lanes: Object.values(state.lanes)
 });

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
 


// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// // Import Style
// import styles from './Kanban.css';

// class Kanban extends Component {
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

// Kanban.propTypes = {
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Kanban);
