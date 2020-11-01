import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from './hand1.svg';
import * as actions from '../../redux/actions';
import './style.css';

function StartGame({ startGame }) {
  return (
    <div className="startGame">
      <div className="content">
        <div className="section ">
          <Logo className="img" />
        </div>

        <div className="section ">
          <div className="wrap">
            <h1 className="title">Who wants to be a millionaire?</h1>
            <button className="btn" onClick={startGame}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch(actions.startGame()),
});

export default connect(null, mapDispatchToProps)(StartGame);
