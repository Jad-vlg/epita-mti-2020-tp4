import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import targetOnClick from "../gameActions/targetOnClick";
import ButtonStart from '../components/ButtonStart';
import ButtonStop from "../components/ButtonStop";

// FIXME: maybe, do something about this ?
const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted,
  targetsList: state.game.targets
});

const GameLayout = ({ isStarted, lives, score, dispatch, targetsList }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >
    {isStarted ? (
      <React.Fragment>
        <ButtonStop onClick={() => dispatch({ type: "GAME_STOP_REQUESTED" })} />
        <Info lives={lives} score={score} />
        {
          Object.keys(targetsList).map((targetId, index) => {
            const target = targetsList[targetId];

            return <Target x={target.x} y={target.y} value={target.value} key={index} onClick={() => dispatch(targetOnClick(targetId))}/>;
          })
        }

      </React.Fragment>
    ) : (
      <ButtonStart onClick={() => dispatch({ type: 'GAME_START_REQUESTED' })} />
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
